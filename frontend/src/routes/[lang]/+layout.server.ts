import cms from '$lib/server/cms';
import { redirect } from '@sveltejs/kit';
import codeToHtml from '$lib/server/shiki';
import { CURRENT_GIT_HASH } from '$env/static/private';

import type { Globals, Language, DefaultPage } from '$lib/types';
import type { LayoutServerLoad } from './$types';

type PageData = {
	globals: Globals;
	languages: Language[];
	lang: Language;
	page: DefaultPage;
	path?: string;
};

export const load: LayoutServerLoad<PageData | void> = async ({
	cookies,
	fetch,
	request,
	params
}) => {
	const data = (
		await fetch(`${cms.backendUrl}/api/query`, {
			method: 'POST',
			headers: cms.getHeaders(params.lang),
			body: JSON.stringify({
				select: {
					...cms.kql.languages,
					...cms.kql.globals(params.lang),
					...cms.kql.getPageBySlug(
						`${params.slug || 'home'}${params.sslug ? `/${params.sslug}` : ''}`
					)
				}
			})
		})
			.then((res) => res.json())
			.catch((err) => console.error(err))
	)?.result;

	console.log('data', data);

	// is the page published?
	if (!data.page) {
		return;
	}

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
	if (page?.blocks?.entries) {
		for (const [index, block] of page.blocks.entries()) {
			if (block.type === 'code') {
				const rendered = await codeToHtml(block.content.language, block.content.code);
				page.blocks[index].content.rendered = rendered;
			}
		}
	}

	globals.translations.currentGitHash = CURRENT_GIT_HASH;

	return {
		globals,
		languages,
		lang: cms.getCookieLanguage(languages, cookies.get('lang')) || defaultLanguage,
		page
	};
};
