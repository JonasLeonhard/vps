import cms from '$lib/server/cms';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import type { Language } from '$lib/types';

/**
 * Permanently redirect all request to '/' to the set cookie language, then the preferedBrowserLanguage, then en
 */
export const load: PageServerLoad = async ({ cookies, request }) => {
	const cookieLang = cookies.get('lang');

	if (cookieLang) {
		throw redirect(303, `/${cookies.get('lang')}`);
	}

	const data = (
		await fetch(`${cms.backendUrl}/api/query`, {
			method: 'POST',
			headers: cms.getHeaders('en'),
			body: JSON.stringify({
				select: {
					...cms.kql.languages
				}
			})
		})
			.then((res) => res.json())
			.catch((err) => console.error(err))
	)?.result;

	const languages: Language[] = data?.languages ? Object.values(JSON.parse(data?.languages)) : [];
	const preferedBrowserLanguage = cms.getPreferedBrowserLanguage(languages, request.headers);

	throw redirect(303, `/${preferedBrowserLanguage?.code || 'en'}`);
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
