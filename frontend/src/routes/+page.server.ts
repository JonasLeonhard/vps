import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	throw redirect(301, '/lang');
};

export const actions: Actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const formLang = formData.get('lang') || 'de';
		cookies.set('lang', formLang.toString());

		// const requestUrl = new URL(request.url);
		// const requestLang = requestUrl.pathname.split('/')?.[0];
		// requestUrl.pathname = requestUrl.pathname.replace(requestLang.toString, formLang.toString());

		throw redirect(303, formLang.toString());
	}
};
