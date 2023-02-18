import { backendUrl, getHeaders } from '$lib/server/cms';
import type { PageServerLoad } from './$types';

interface Language {
	code: string;
	default: boolean;
	direction: 'ltr' | 'rtl';
	locale: string[];
	name: string;
	rules: { [key: string]: string };
	url: string;
}

type Data = {
	languages: Language[];
	currentLanguage: Language;
	preferedBrowserLanguage: Language['code'];
};

export const load: PageServerLoad<Data> = async ({ fetch, params }) => {
	// get backend languages
	const res = await fetch(`${backendUrl}/api/languages`, {
		method: 'GET',
		headers: getHeaders('de')
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

	console.log('languages:', res);

	return {
		languages: res?.data,
		currentLanguage: res?.data?.find((language: Language) => language.code === params.lang),
		preferedBrowserLanguage: 'de'
	} as Data;
};
