import cms from '$lib/server/cms';
import { redirect } from '@sveltejs/kit';

import type { Header, Language } from '$lib/types/index';
import type { LayoutServerLoad } from './$types';
type Data = {
	header: Header;
	languages: Language[];
	lang: Language;
};

export const load: LayoutServerLoad<Data> = async ({ cookies, fetch, request, params }) => {
	const data = (
		await fetch(`${cms.backendUrl}/api/query`, {
			method: 'POST',
			headers: cms.getHeaders(params.lang),
			body: JSON.stringify({
				select: {
					...cms.kql.languages,
					...cms.kql.header
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

	return {
		header: data?.header as Header,
		languages: languages,
		lang: cms.getCookieLanguage(languages, cookies.get('lang')) || defaultLanguage
	};
};
