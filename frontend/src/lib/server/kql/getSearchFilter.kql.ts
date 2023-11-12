const getSearchFilter = (templates = "['article', 'project']") => {
	return {
		searchFilter: {
			query: `site.index(false).filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				tags: 'page.tags.toString()',
				created: 'page.created.toString()'
			}
		}
	};
};

export default getSearchFilter;
