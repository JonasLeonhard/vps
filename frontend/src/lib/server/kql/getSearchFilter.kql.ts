const getSearchFilter = (templates = "['article', 'project']") => {
	return {
		searchFilter: {
			query: `site.index(false).filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				created: 'page.created',
				tags: 'page.tags'
			}
		}
	};
};

export default getSearchFilter;
