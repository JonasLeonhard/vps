import cms from '$lib/server/cms';
import { redirect } from '@sveltejs/kit';
import codeToHtml from '$lib/server/shiki';

import type { Globals, Language, DefaultPage, Seo } from '$lib/types/index';
import type { LayoutServerLoad } from './$types';
type PageData = {
	globals: Globals;
	languages: Language[];
	lang: Language;
	page: DefaultPage;
};

export const load: LayoutServerLoad<PageData> = async ({ cookies, fetch, request, params }) => {
	const data = (
		await fetch(`${cms.backendUrl}/api/query`, {
			method: 'POST',
			headers: cms.getHeaders(params.lang),
			body: JSON.stringify({
				select: {
					...cms.kql.languages,
					...cms.kql.globals,
					...cms.kql.getPageBySlug(params.slug || 'home')
				}
			})
		})
			.then((res) => res.json())
			.catch((err) => console.error(err))
	)?.result;

	const languages: Language[] = data?.languages ? Object.values(JSON.parse(data?.languages)) : [];
	const defaultLanguage = cms.getDefaultLanguage(languages);
	const preferedBrowserLanguage = cms.getPreferedBrowserLanguage(languages, request.headers);

	if (!cms.requestedLanguageCodeExists(languages, params.lang)) {
		cookies.set('lang', preferedBrowserLanguage?.code || defaultLanguage.code, { path: '/' });
		throw redirect(
			303,
			cms.getLangReplacedUrl(request.url, cookies.get('lang') || defaultLanguage.code)
		);
	}

	cookies.set('lang', params.lang, { path: '/' });

	const globals = { ...data?.globals, seo: data?.globalSeo } as Globals;
	const page = { ...data?.page, seo: data?.pageSeo } as DefaultPage;

	// transform pageblocks: prerender code blocks with shiki
	for (const [index, block] of page.blocks.entries()) {
		if (block.type === 'code') {
			const rendered = await codeToHtml(block.content.language, block.content.code);
			page.blocks[index].content.rendered = rendered;
		}
	}

	return {
		globals,
		languages,
		lang: cms.getCookieLanguage(languages, cookies.get('lang')) || defaultLanguage,
		page
	};
};
