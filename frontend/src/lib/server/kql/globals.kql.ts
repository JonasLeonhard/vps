import getSeo from './getSeo.kql';

const globals = (lang: string) => ({
	globals: {
		query: 'site',
		select: {
			footerNavigation: 'site.footerNavigation.toNavigationArray',
			metaNavigation: 'site.metaNavigation.toNavigationArray',
			navigation: 'site.navigation.toNavigationArray',
			socialMedia: 'site.socialMedia.toData("yaml")',
			translations: {
				query: `kirby.language('${lang}').translations`
			}
		}
	},
	...getSeo()
});

export default globals;
