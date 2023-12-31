import type { SvelteComponent } from 'svelte';

import { readFileSync } from 'fs';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { initialize, svg2png } from 'svg2png-wasm';

await initialize(readFileSync('./node_modules/svg2png-wasm/svg2png_wasm_bg.wasm')).catch(
	(e: string) => console.error(e)
);

export default async function renderComponentToPng(options: {
	component: SvelteComponent;
	fonts: { data: Buffer; name: string }[];
	height: number;
	props: object;
	width: number;
}) {
	const { component, fonts, height, props, width } = options;
	const result = component.render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts,
		height: +height,
		width: +width
	});

	const png = await svg2png(svg, {
		fonts,
		height: +height,
		width: +width
	});

	return new Response(png, {
		headers: {
			'content-type': 'image/png'
		}
	});
}
