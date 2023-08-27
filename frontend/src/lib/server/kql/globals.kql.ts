import getSeo from './getSeo.kql';

const globals = {
	globals: {
		query: 'site',
		select: {
			navigation: 'site.navigation.toNavigationArray',
			footerNavigation: 'site.footerNavigation.toNavigationArray',
			metaNavigation: 'site.metaNavigation.toNavigationArray',
			socialMedia: 'site.socialMedia.toData("yaml")',
			translations: {
				query: 'site',
				select: {
					footerText: 'site.footerText',
					navigationLabel: 'site.navigationLabel',
					language: 'site.language',
					theme: 'site.theme',
					themeLight: 'site.themeLight',
					themeDark: 'site.themeDark',
					results: 'site.results'
				}
			}
		}
	},
	...getSeo()
};

export default globals;
