/* eslint-disable @typescript-eslint/no-explicit-any */
import { getHighlighter } from 'shiki';
import shikiConfig from './shiki.config';

export default async function codeToHtml(lang: string, code: string) {
	const highlighter = await getHighlighter(shikiConfig as any);

	console.log(lang, code);
	return highlighter.codeToHtml(code, { lang });
}
