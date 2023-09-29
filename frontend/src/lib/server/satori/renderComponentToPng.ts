import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

import type { SvelteComponent } from 'svelte';

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

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
