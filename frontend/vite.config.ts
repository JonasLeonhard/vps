import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import rawFonts from './src/lib/server/satori/rawFontsVitePlugin';

const config: UserConfig = {
	plugins: [sveltekit(), rawFonts(['.ttf'])]
};

export default config;
