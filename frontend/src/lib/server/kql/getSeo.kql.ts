const getSeo = (slug?: string) => {
	const siteOrPage = !slug ? 'site' : 'page';

	return {
		[!slug ? 'globalSeo' : 'pageSeo']: {
			query: !slug ? 'site' : `page('${slug}')`,
			select: {
				metaTitle: `${siteOrPage}.content.meta_title`,
				metaDescription: `${siteOrPage}.content.meta_description`,
				metaCanonicalUrl: `${siteOrPage}.content.meta_canonical_url`,
				metaAuthor: `${siteOrPage}.content.meta_author`,
				metaImage: `${siteOrPage}.content.meta_image`,
				metaPhoneNumber: `${siteOrPage}.content.meta_phone_number`,
				ogTitle: `${siteOrPage}.content.og_title`,
				ogDescription: `${siteOrPage}.content.og_description`,
				ogImage: `${siteOrPage}.content.og_image`,
				ogSiteName: `${siteOrPage}.content.og_site_name`,
				ogUrl: `${siteOrPage}.content.og_url`,
				ogAudio: `${siteOrPage}.content.og_audio`,
				ogVideo: `${siteOrPage}.content.og_video`,
				ogDeterminer: `${siteOrPage}.content.og_determiner`,
				ogType: `${siteOrPage}.content.og_type`,
				ogTypeArticlePublishedTime: `${siteOrPage}.content.og_type_article_published_time`,
				ogTypeArticleModifiedTime: `${siteOrPage}.content.og_type_article_modified_time`,
				ogTypeArticleExparationTime: `${siteOrPage}.content.og_type_article_expiration_time`,
				ogTypeArticleAuthor: `${siteOrPage}.content.og_type_article_author.toData('yaml')`,
				ogTypeArticleSection: `${siteOrPage}.content.og_type_article_section`,
				ogTypeArticleTag: `${siteOrPage}.content.og_type_article_tag.toData('yaml')`,
				twitterTitle: `${siteOrPage}.content.twitter_title`,
				twitterImage: `${siteOrPage}.content.twitter_image`,
				twitterCardType: `${siteOrPage}.content.twitter_card_type`,
				twitterDescription: `${siteOrPage}.content.twitter_description`,
				twitterSite: `${siteOrPage}.content.twitter_site`,
				twitterCreator: `${siteOrPage}.content.twitter_creator`,
				robotsNoIndex: `${siteOrPage}.content.robots_noindex`,
				robotsNoFollow: `${siteOrPage}.content.robots_nofollow`,
				robotsNoArchive: `${siteOrPage}.content.robots_noarchive`,
				robotsNoImageIndex: `${siteOrPage}.content.robots_noimageindex`,
				robotsNoSnippet: `${siteOrPage}.content.robots_nosnippet`
			}
		}
	};
};

export default getSeo;
