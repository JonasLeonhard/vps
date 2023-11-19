const getSearch = (query: string, templates = "['article', 'project']") => {
	return {
		search: {
			query: `site.search('${query}', 'title|excerpt|blocks').filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				title: 'page.title.toString',
				blocks: 'page.blocks.toBlocks',
				id: 'page.id',
				status: 'page.status',
				slug: 'page.slug',
				url: 'page.url',
				intendedTemplate: 'page.intendedTemplate',
				cover: 'page.cover.toFileExtended("cover")',
				excerpt: 'page.excerpt.toString'
			}
		}
	};
};

export default getSearch;
