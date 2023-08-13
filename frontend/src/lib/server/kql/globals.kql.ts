import getSeo from './getSeo.kql';

const globals = {
	globals: {
		query: 'site',
		select: {
			navigation: 'site.navigation.toNavigationArray',
			footerNavigation: 'site.footerNavigation.toNavigationArray',
			metaNavigation: 'site.metaNavigation.toNavigationArray',
			socialMedia: 'site.socialMedia.toData("yaml")',
			footerText: 'site.footerText',
			translations: {
				query: 'site',
				select: {
					navigationLabel: 'site.navigationLabel',
					language: 'site.language',
					theme: 'site.theme',
					themeLight: 'site.themeLight',
					themeDark: 'site.themeDark'
				}
			}
		}
	},
	...getSeo()
};

export default globals;
