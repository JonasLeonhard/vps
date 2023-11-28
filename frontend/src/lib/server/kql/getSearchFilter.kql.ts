const getSearchFilter = (templates = "['article', 'project']") => {
	return {
		searchFilter: {
			query: `site.index(false).filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				tags: 'page.tags',
				created: 'page.created'
			}
		}
	};
};

export default getSearchFilter;
