import { OgImage } from '$lib/components';
import renderComponentToPng from '$lib/server/satori/renderComponentToPng';

// we use a Vite plugin to turn this import into the result of fs.readFileSync during build
import sourceInter from '../../../../static/fonts/Inter-Regular.ttf';

export const GET = async ({ url }) => {
	const width = 1200;
	const height = 600;
	return renderComponentToPng({
		component: OgImage,
		props: {
			headline: url.searchParams.get('headline') || 'Jonasleonhard.de',
			subline: url.searchParams.get('subline')
		},
		height,
		width,
		fonts: [
			{
				name: 'Inter-Var',
				data: Buffer.from(sourceInter)
			}
		]
	});
};
