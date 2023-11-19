import { getSeo } from './index';

const getPageBySlug = (slug: string) => ({
	page: {
		query: `page('${slug}')`,
		select: {
			id: 'page.id',
			title: 'page.title.toString',
			status: 'page.status',
			slug: 'page.slug',
			blocks: 'page.blocks.toBlocksExtended',
			content: 'page.content',
			cover: 'page.cover.toFileExtended',
			excerpt: 'page.excerpt.toString'
		}
	},
	...getSeo(slug)
});

export default getPageBySlug;
