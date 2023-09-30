import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { svg2png, initialize } from 'svg2png-wasm';
import type { SvelteComponent } from 'svelte';
import { readFileSync } from 'fs';

await initialize(readFileSync('./node_modules/svg2png-wasm/svg2png_wasm_bg.wasm')).catch(
	(e: string) => console.error(e)
);

export default async function renderComponentToPng(options: {
	component: SvelteComponent;
	props: object;
	height: number;
	width: number;
	fonts: { name: string; data: Buffer }[];
}) {
	const { component, props, height, width, fonts } = options;
	const result = component.render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts,
		height: +height,
		width: +width
	});

	const png = await svg2png(svg, {
		width: +width,
		height: +height,
		fonts
	});

	return new Response(png, {
		headers: {
			'content-type': 'image/png'
		}
	});
}
