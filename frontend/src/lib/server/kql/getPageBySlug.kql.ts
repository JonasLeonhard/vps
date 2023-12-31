import { getSeo } from './index';

const getPageBySlug = (slug: string) => ({
	page: {
		query: `page('${slug}')`,
		select: {
			blocks: 'page.blocks.toBlocksExtended',
			content: 'page.content',
			cover: 'page.cover.toFileExtended("cover")',
			excerpt: 'page.excerpt',
			id: 'page.id',
			slug: 'page.slug',
			status: 'page.status',
			title: 'page.title'
		}
	},
	...getSeo(slug)
});

export default getPageBySlug;
