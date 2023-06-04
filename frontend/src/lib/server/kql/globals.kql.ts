const globals = {
	globals: {
		query: 'site',
		select: {
			navigation: 'site.navigation.toNavigationArray',
			footerNavigation: 'site.footerNavigation.toNavigationArray',
			metaNavigation: 'site.metaNavigation.toNavigationArray',
			footerText: 'site.footerText',
			socialMedia: 'site.socialMedia.toData("yaml")'
		}
	}
};

export default globals;
