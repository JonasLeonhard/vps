import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

/**
 * Permanently redirect all request to '/' to the set cookie language.
 */
export const load: PageServerLoad = async ({ cookies }) => {
	throw redirect(303, `/${cookies.get('lang')}`);
};

/**
 * replaces the first subroute in the given 'formUrl',
 * eg formUrl='http://localhost:5173/en/blog?a=b' with formLang='de' would return
 * 'http://localhost:5173/de/blog?a=b'
 */
const getReplacedFormUrlLang = (formUrl: string, formLang: string): string => {
	const requestUrl = new URL(formUrl?.toString() || `/${formLang}`);
	const requestLang = requestUrl.pathname.split('/')?.[1];
	requestUrl.pathname = requestUrl.pathname.replace(requestLang, formLang.toString());
	return requestUrl.toString();
};

export const actions: Actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const formLang = formData.get('lang')?.toString() || 'en';
		const formUrl = formData.get('url')?.toString() || '/en';

		cookies.set('lang', formLang);
		throw redirect(303, getReplacedFormUrlLang(formUrl, formLang));
	}
};
