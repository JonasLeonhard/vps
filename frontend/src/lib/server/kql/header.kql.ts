const header = {
	header: {
		query: "site.find('header')",
		select: {
			navigation: {
				query: 'page.navigation.toNavigationArray'
			}
		}
	}
};

export default header;
