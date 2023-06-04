<script lang="ts">
	import type { Seo } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';

	export let pageSeo: Seo;
	export let globalsSeo: Seo;
	export let pageTitle: string;
</script>

<MetaTags
	title={pageSeo.metaTitle || pageTitle || globalsSeo.metaTitle}
	titleTemplate="%s | Jonas Leonhard"
	description={pageSeo.metaDescription || globalsSeo.metaDescription}
	canonical={pageSeo.metaCanonicalUrl}
	openGraph={{
		type: pageSeo.ogType || globalsSeo.ogType,
		title: pageSeo.ogTitle || globalsSeo.ogTitle || pageSeo.metaImage || globalsSeo.metaImage,
		description: pageSeo.ogDescription || globalsSeo.ogDescription,
		images: [
			{
				url: pageSeo.ogImage || globalsSeo.ogImage || pageSeo.metaImage || globalsSeo.metaImage
			}
		],
		article: {
			authors:
				pageSeo.ogTypeArticleAuthor?.map((author) => author.url) ||
				globalsSeo.ogTypeArticleAuthor?.map((author) => author.url),
			expirationTime: pageSeo.ogTypeArticleExpirationTime || globalsSeo.ogTypeArticleExpirationTime,
			modifiedTime: pageSeo.ogTypeArticleModifiedTime || globalsSeo.ogTypeArticleModifiedTime,
			publishedTime: pageSeo.ogTypeArticlePublishedTime || globalsSeo.ogTypeArticlePublishedTime,
			tags: pageSeo.ogTypeArticleTag || globalsSeo.ogTypeArticleTag,
			section: pageSeo.ogTypeArticleSection || globalsSeo.ogTypeArticleSection
		},
		determiner: pageSeo.ogDeterminer || globalsSeo.ogDeterminer,
		audio: pageSeo.ogAudio || globalsSeo.ogAudio,
		video: pageSeo.ogVideo || globalsSeo.ogVideo,
		site_name: pageSeo.ogSiteName || globalsSeo.ogSiteName,
		url: pageSeo.ogUrl || globalsSeo.ogUrl
	}}
	twitter={{
		cardType: pageSeo.twitterCardType || globalsSeo.twitterCardType,
		title: pageSeo.twitterTitle || globalsSeo.twitterTitle,
		description: pageSeo.twitterDescription || globalsSeo.twitterDescription,
		image: pageSeo.twitterImage || globalsSeo.twitterImage,
		handle: pageSeo.twitterCreator || globalsSeo.twitterCreator,
		site: pageSeo.twitterSite || globalsSeo.twitterSite
	}}
	robotsProps={{
		noarchive: (pageSeo.robotsNoArchive || globalsSeo.robotsNoArchive) === 'enabled' ? true : false,
		nosnippet: (pageSeo.robotsNoSnippet || globalsSeo.robotsNoSnippet) === 'enabled' ? true : false,
		noindex: (pageSeo.robotsNoIndex || globalsSeo.robotsNoIndex) === 'enabled' ? true : false,
		noimageindex: (pageSeo.robotsNoIndex || globalsSeo.robotsNoIndex) === 'enabled' ? true : false,
		nofollow: (pageSeo.robotsNoFollow || globalsSeo.robotsNoFollow) === 'enabled' ? true : false
	}}
/>
