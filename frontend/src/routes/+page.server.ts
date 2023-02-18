import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	setLang: async ({ cookies, request }) => {
		const formData = await request.formData();
		const lang = formData.get('lang') || 'de';
		cookies.set('lang', lang.toString());

		throw redirect(303, lang.toString());
	}
};
