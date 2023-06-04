export interface Seo {
	metaTitle: string;
	metaDescription: string;
	metaCanonicalUrl: string;
	metaAuthor: string;
	metaImage: string;
	metaPhoneNumber: string;
	ogTitle: string;
	ogDescription: string;
	ogImage: string;
	ogSiteName: string;
	ogUrl: string;
	ogAudio: string;
	ogVideo: string;
	ogDeterminer: string;
	ogType: string;
	ogTypeArticlePublishedTime: string;
	ogTypeArticleModifiedTime: string;
	ogTypeArticleExparationTime: string;
	ogTypeArticleAuthor: {
		url: string;
		firstname: string;
		lastname: string;
		username: string;
		gender: string;
	}[];
	ogTypeArticleSection: string;
	ogTypeArticleTag: string[];
	twitterTitle: string;
	twitterImage: string;
	twitterCardType: string;
	twitterDescription: string;
	twitterSite: string;
	twitterCreator: string;
	robotsNoIndex: string;
	robotsNoFollow: string;
	robotsNoArchive: string;
	robotsNoImageIndex: string;
	robotsNoSnippet: string;
}
