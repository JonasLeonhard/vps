import { backendUrl, getHeaders } from '$lib/server/cms';
import type { Language } from '$lib/types/index';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

type Data = {
	languages: Language[];
	lang: Language;
};

export const load: LayoutServerLoad<Data> = async ({ cookies, fetch, request, params }) => {
	const res = await fetch(`${backendUrl}/api/languages`, {
		method: 'GET',
		headers: getHeaders(params.lang)
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

	const defaultLanguage = res?.data?.find((language: Language) => language.default);
	if (!res?.data?.find((language: Language) => language.code === params.lang)) {
		throw redirect(303, defaultLanguage.code);
	}

	const acceptedLang = request.headers.get('accept-language')?.match(/[a-zA-Z-]{2,10}/gm);
	const preferedBrowserLanguage = res?.data?.find((language: Language) =>
		acceptedLang?.includes(language.code)
	);

	const cookieLanguageCode = cookies.get('lang');
	if (!cookieLanguageCode) {
		cookies.set('lang', preferedBrowserLanguage.code || defaultLanguage.code);
	}

	return {
		languages: res?.data,
		lang: res?.data?.find((language: Language) => language.code === cookies.get('lang'))
	};
};
