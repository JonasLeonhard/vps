import { backendUrl, getHeaders } from '$lib/server/cms';
import type { Language } from '$lib/types/index';
import type { PageServerLoad } from './$types';

type Data = {
	languages: Language[];
	currentLanguage: Language;
	preferedBrowserLanguage: Language['code'];
};

export const load: PageServerLoad<Data> = async ({ cookies, fetch, request }) => {
	const acceptedLang = request.headers.get('accept-language')?.match(/[a-zA-Z-]{2,10}/gm);

	const res = await fetch(`${backendUrl}/api/languages`, {
		method: 'GET',
		headers: getHeaders('de')
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

	const preferedBrowserLanguage = res?.data?.find((language: Language) =>
		acceptedLang?.includes(language.code)
	);
	const defaultLanguage = res?.data?.find((language: Language) => language.default);

	const cookieLanguageCode = cookies.get('lang');
	if (!cookieLanguageCode) {
		cookies.set('lang', preferedBrowserLanguage.code || defaultLanguage.code);
	}

	return {
		languages: res?.data,
		currentLanguage: res?.data?.find((language: Language) => language.code === cookies.get('lang'))
	} as Data;
};
