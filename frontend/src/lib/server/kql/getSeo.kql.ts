const getSeo = (slug?: string) => {
	const siteOrPage = !slug ? 'site' : 'page';

	return {
		[!slug ? 'globalSeo' : 'pageSeo']: {
			query: !slug ? 'site' : `page('${slug}')`,
			select: {
				metaAuthor: `${siteOrPage}.content.meta_author`,
				metaCanonicalUrl: `${siteOrPage}.content.meta_canonical_url`,
				metaDescription: `${siteOrPage}.content.meta_description`,
				metaImage: `${siteOrPage}.content.meta_image`,
				metaPhoneNumber: `${siteOrPage}.content.meta_phone_number`,
				metaTitle: `${siteOrPage}.content.meta_title`,
				ogAudio: `${siteOrPage}.content.og_audio`,
				ogDescription: `${siteOrPage}.content.og_description`,
				ogDeterminer: `${siteOrPage}.content.og_determiner`,
				ogImage: `${siteOrPage}.content.og_image`,
				ogSiteName: `${siteOrPage}.content.og_site_name`,
				ogTitle: `${siteOrPage}.content.og_title`,
				ogType: `${siteOrPage}.content.og_type`,
				ogTypeArticleAuthor: `${siteOrPage}.content.og_type_article_author.toData('yaml')`,
				ogTypeArticleExparationTime: `${siteOrPage}.content.og_type_article_expiration_time`,
				ogTypeArticleModifiedTime: `${siteOrPage}.content.og_type_article_modified_time`,
				ogTypeArticlePublishedTime: `${siteOrPage}.content.og_type_article_published_time`,
				ogTypeArticleSection: `${siteOrPage}.content.og_type_article_section`,
				ogTypeArticleTag: `${siteOrPage}.content.og_type_article_tag.toData('yaml')`,
				ogUrl: `${siteOrPage}.content.og_url`,
				ogVideo: `${siteOrPage}.content.og_video`,
				robotsNoArchive: `${siteOrPage}.content.robots_noarchive`,
				robotsNoFollow: `${siteOrPage}.content.robots_nofollow`,
				robotsNoImageIndex: `${siteOrPage}.content.robots_noimageindex`,
				robotsNoIndex: `${siteOrPage}.content.robots_noindex`,
				robotsNoSnippet: `${siteOrPage}.content.robots_nosnippet`,
				twitterCardType: `${siteOrPage}.content.twitter_card_type`,
				twitterCreator: `${siteOrPage}.content.twitter_creator`,
				twitterDescription: `${siteOrPage}.content.twitter_description`,
				twitterImage: `${siteOrPage}.content.twitter_image`,
				twitterSite: `${siteOrPage}.content.twitter_site`,
				twitterTitle: `${siteOrPage}.content.twitter_title`
			}
		}
	};
};

export default getSeo;
