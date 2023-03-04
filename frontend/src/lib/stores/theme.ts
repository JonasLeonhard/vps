import { browser } from '$app/environment';
import cookies from '$lib/client/cookies';
import type { Theme } from '$lib/types';
import { writable } from 'svelte/store';

const theme = writable<Theme>(
	browser ? (document?.documentElement?.dataset?.theme as Theme) : undefined
);

theme.subscribe((theme) => {
	if (browser) {
		document.documentElement.dataset.theme = theme;
		cookies.set('theme', theme?.toString());
	}
});

export { theme };
