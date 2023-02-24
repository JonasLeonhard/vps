import cms from '$lib/server/cms';
import type { Language } from '$lib/types/index';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

type Data = {
	languages: Language[];
	lang: Language;
};

const getDefaultLanguage = (languages: Language[] | undefined): Language => {
	return languages?.find((language: Language) => language.default) as Language;
};

const getPreferedBrowserLanguage = (
	languages: Language[],
	headers: Headers
): Language | undefined => {
	const acceptedLang = headers.get('accept-language')?.match(/[a-zA-Z-]{2,10}/gm);
	return languages.find((language: Language) => acceptedLang?.includes(language.code));
};

const getCookieLanguage = (
	languages: Language[],
	cookiesLanguageCode: string | undefined
): Language | undefined => {
	return languages.find((language: Language) => language.code === cookiesLanguageCode);
};

const requestedLanguageCodeExists = (
	languages: Language[] | undefined,
	requestedLanguageCode: string
) => {
	return languages?.find((language: Language) => language.code === requestedLanguageCode);
};

export const load: LayoutServerLoad<Data> = async ({ cookies, fetch, request, params }) => {
	const languages: Language[] =
		(
			await fetch(`${cms.backendUrl}/api/languages`, {
				method: 'GET',
				headers: cms.getHeaders(params.lang)
			})
				.then((res) => res.json())
				.catch((err) => console.error(err))
		)?.data || [];

	const defaultLanguage = getDefaultLanguage(languages);
	const preferedBrowserLanguage = getPreferedBrowserLanguage(languages, request.headers);
	const cookieLanguageCode = cookies.get('lang');

	if (!cookieLanguageCode) {
		cookies.set('lang', preferedBrowserLanguage?.code || defaultLanguage.code);
	}

	if (!requestedLanguageCodeExists(languages, params.lang)) {
		throw redirect(303, defaultLanguage.code);
	}

	return {
		languages: languages,
		lang: getCookieLanguage(languages, cookies.get('lang')) || defaultLanguage
	};
};
