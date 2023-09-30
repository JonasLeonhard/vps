import { OgImage } from '$lib/components';
import renderComponentToPng from '$lib/server/satori/renderComponentToPng';

// we use a Vite plugin to turn this import into the result of fs.readFileSync during build
import sourceInter from '../../../../static/fonts/Inter-Regular.ttf';

import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	return renderComponentToPng({
		component: OgImage,
		props: {
			headline: url.searchParams.get('headline') || 'Jonasleonhard.de',
			subline: url.searchParams.get('subline')
		},
		width: +(url.searchParams.get('height') || 1200),
		height: +(url.searchParams.get('width') || 600),
		fonts: [
			{
				name: 'Inter-Var',
				data: Buffer.from(sourceInter)
			}
		]
	});
};
