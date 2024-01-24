type SearchQuery = {
	limit?: number;
	page?: number;
	query: string;
	templates?: string;
};

const getSearch = ({
	limit = 8,
	page = 0,
	query,
	templates = "['article', 'project']"
}: SearchQuery) => {
	return {
		search: {
			pagination: {
				limit,
				page
			},
			query: `site.search('${query}', 'title|excerpt|blocks').filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				blocks: 'page.blocks.toBlocks',
				cover: 'page.cover.toFileExtended("cover")',
				created: 'page.created',
				excerpt: 'page.excerpt',
				id: 'page.id',
				intendedTemplate: 'page.intendedTemplate',
				slug: 'page.slug',
				status: 'page.status',
				tags: 'page.tags',
				title: 'page.title',
				url: 'page.url'
			}
		}
	};
};

export default getSearch;
