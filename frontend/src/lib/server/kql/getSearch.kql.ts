const getSearch = (query: string, templates = "['article', 'project']") => {
	return {
		search: {
			query: `site.search('${query}').filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				title: 'page.title.toString',
				id: 'page.id',
				status: 'page.status',
				slug: 'page.slug',
				url: 'page.url',
				intendedTemplate: 'page.intendedTemplate'
			}
		}
	};
};

export default getSearch;
