const getSearch = (query: string, templates = "['article', 'project']") => {
	return {
		search: {
			query: `site.search('${query}').filterBy('intendedTemplate', 'in', ${templates})`,
			select: {
				result: 'page'
			}
		}
	};
};

export default getSearch;
