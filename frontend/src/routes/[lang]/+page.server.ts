import { backendUrl } from '$lib/server/cms';
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

type Data = { languages: Language[] };

export const load: PageServerLoad<Data> = async ({ fetch }) => {
	// get backend languages
	const res = await fetch(`${backendUrl}/api/languages`, {
		method: 'GET'
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

	// try to get the prefered browser language
	console.log('languages:', res);

	return {
		languages: res?.data,
		preferedBrowserLanguage: 'de'
	};
};
