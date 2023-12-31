import { OgImage } from '$lib/components';
import renderComponentToPng from '$lib/server/satori/renderComponentToPng';

import type { RequestHandler } from './$types';

// we use a Vite plugin to turn this import into the result of fs.readFileSync during build
import sourceInter from '../../../../static/fonts/Inter-Regular.ttf';

export const GET: RequestHandler = async ({ url }) => {
	return renderComponentToPng({
		component: OgImage,
		fonts: [
			{
				data: Buffer.from(sourceInter),
				name: 'Inter-Var'
			}
		],
		height: +(url.searchParams.get('width') || 600),
		props: {
			headline: url.searchParams.get('headline') || 'Jonasleonhard.de',
			subline: url.searchParams.get('subline')
		},
		width: +(url.searchParams.get('height') || 1200)
	});
};
