import type { Theme } from '$lib/types';

import { browser } from '$app/environment';
import cookies from '$lib/client/cookies';
import { writable } from 'svelte/store';

const theme = writable<Theme>(
	browser ? (document?.documentElement?.dataset?.theme as Theme) : undefined
);

theme.subscribe((theme) => {
	if (browser && theme) {
		document.documentElement.dataset.theme = theme;
		cookies.set('theme', theme.toString(), { path: '/' });
	}
});

export { theme };
