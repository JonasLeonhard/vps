const getSeo = (slug?: string) => {
	const siteOrPage = !slug ? 'site' : 'page';

	return {
		[!slug ? 'globalSeo' : 'pageSeo']: {
			query: !slug ? 'site' : `page('${slug}')`,
			select: {
				metaTitle: `${siteOrPage}.content.meta_title.toString`,
				metaDescription: `${siteOrPage}.content.meta_description.toString`,
				metaCanonicalUrl: `${siteOrPage}.content.meta_canonical_url.toString`,
				metaAuthor: `${siteOrPage}.content.meta_author.toString`,
				metaImage: `${siteOrPage}.content.meta_image.toString`,
				metaPhoneNumber: `${siteOrPage}.content.meta_phone_number.toString`,
				ogTitle: `${siteOrPage}.content.og_title.toString`,
				ogDescription: `${siteOrPage}.content.og_description.toString`,
				ogImage: `${siteOrPage}.content.og_image.toString`,
				ogSiteName: `${siteOrPage}.content.og_site_name.toString`,
				ogUrl: `${siteOrPage}.content.og_url.toString`,
				ogAudio: `${siteOrPage}.content.og_audio.toString`,
				ogVideo: `${siteOrPage}.content.og_video.toString`,
				ogDeterminer: `${siteOrPage}.content.og_determiner.toString`,
				ogType: `${siteOrPage}.content.og_type.toString`,
				ogTypeArticlePublishedTime: `${siteOrPage}.content.og_type_article_published_time.toString`,
				ogTypeArticleModifiedTime: `${siteOrPage}.content.og_type_article_modified_time.toString`,
				ogTypeArticleExparationTime: `${siteOrPage}.content.og_type_article_expiration_time.toString`,
				ogTypeArticleAuthor: `${siteOrPage}.content.og_type_article_author.toData('yaml')`,
				ogTypeArticleSection: `${siteOrPage}.content.og_type_article_section.toString`,
				ogTypeArticleTag: `${siteOrPage}.content.og_type_article_tag.toData('yaml')`,
				twitterTitle: `${siteOrPage}.content.twitter_title.toString`,
				twitterImage: `${siteOrPage}.content.twitter_image.toString`,
				twitterCardType: `${siteOrPage}.content.twitter_card_type.toString`,
				twitterDescription: `${siteOrPage}.content.twitter_description.toString`,
				twitterSite: `${siteOrPage}.content.twitter_site.toString`,
				twitterCreator: `${siteOrPage}.content.twitter_creator.toString`,
				robotsNoIndex: `${siteOrPage}.content.robots_noindex.toString`,
				robotsNoFollow: `${siteOrPage}.content.robots_nofollow.toString`,
				robotsNoArchive: `${siteOrPage}.content.robots_noarchive.toString`,
				robotsNoImageIndex: `${siteOrPage}.content.robots_noimageindex.toString`,
				robotsNoSnippet: `${siteOrPage}.content.robots_nosnippet.toString`
			}
		}
	};
};

export default getSeo;
