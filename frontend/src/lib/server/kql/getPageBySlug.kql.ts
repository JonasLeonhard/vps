import { getSeo } from './index';

const getPageBySlug = (slug: string) => ({
	page: {
		query: `page('${slug}')`,
		select: {
			id: 'page.id',
			title: 'page.title',
			status: 'page.status',
			slug: 'page.slug',
			blocks: 'page.content.blocks.toBlocks',
			content: 'page.content'
		}
	},
	...getSeo(slug)
});

export default getPageBySlug;
