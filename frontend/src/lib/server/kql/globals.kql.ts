import getSeo from './getSeo.kql';

const globals = (lang: string) => ({
	globals: {
		query: 'site',
		select: {
			navigation: 'site.navigation.toNavigationArray',
			footerNavigation: 'site.footerNavigation.toNavigationArray',
			metaNavigation: 'site.metaNavigation.toNavigationArray',
			socialMedia: 'site.socialMedia.toData("yaml")',
			translations: {
				query: `kirby.language('${lang}').translations`
			}
		}
	},
	...getSeo()
});

export default globals;
