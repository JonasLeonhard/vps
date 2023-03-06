import cms from '$lib/server/cms';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

/**
 * Permanently redirect all request to '/' to the set cookie language.
 */
export const load: PageServerLoad = async ({ cookies }) => {
	throw redirect(303, `/${cookies.get('lang')}`);
};

export const actions: Actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const formLang = formData.get('lang')?.toString() || 'en';
		const formUrl = formData.get('url')?.toString() || '/en';

		cookies.set('lang', formLang, { path: '/', maxAge: 60 * 60 * 24 * 365 });
		throw redirect(303, cms.getLangReplacedUrl(formUrl, formLang));
	}
};
