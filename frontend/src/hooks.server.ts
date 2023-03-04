import type { Language, Theme } from '$lib/types';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const lang: Language['code'] = event.cookies.get('lang') || 'de';
	const theme: Theme = event.cookies.get('theme') as Theme;

	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', lang).replace('%theme%', theme || '%theme%')
	});
};
