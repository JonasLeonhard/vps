<script lang="ts">
	import type { Seo } from '$lib/types';

	import { MetaTags } from 'svelte-meta-tags';

	export let pageSeo: Seo;
	export let globalsSeo: Seo;
	export let pageTitle: string;
</script>

<MetaTags
	title={pageSeo?.metaTitle || pageTitle || globalsSeo?.metaTitle}
	titleTemplate="%s | Jonas Leonhard"
	description={pageSeo?.metaDescription || globalsSeo?.metaDescription}
	canonical={pageSeo?.metaCanonicalUrl}
	openGraph={{
		article: {
			authors:
				pageSeo?.ogTypeArticleAuthor?.map((author) => author.url) ||
				globalsSeo?.ogTypeArticleAuthor?.map((author) => author.url),
			expirationTime:
				pageSeo?.ogTypeArticleExpirationTime || globalsSeo?.ogTypeArticleExpirationTime,
			modifiedTime: pageSeo?.ogTypeArticleModifiedTime || globalsSeo?.ogTypeArticleModifiedTime,
			publishedTime: pageSeo?.ogTypeArticlePublishedTime || globalsSeo?.ogTypeArticlePublishedTime,
			section: pageSeo?.ogTypeArticleSection || globalsSeo?.ogTypeArticleSection,
			tags: pageSeo?.ogTypeArticleTag || globalsSeo?.ogTypeArticleTag
		},
		audio: pageSeo?.ogAudio || globalsSeo?.ogAudio,
		description: pageSeo?.ogDescription || globalsSeo?.ogDescription,
		determiner: pageSeo?.ogDeterminer || globalsSeo?.ogDeterminer,
		images: [
			{
				url:
					pageSeo?.ogImage ||
					globalsSeo?.ogImage ||
					pageSeo?.metaImage ||
					globalsSeo?.metaImage ||
					`/api/og?headline=${pageTitle}&subline=Blog`
			}
		],
		site_name: pageSeo?.ogSiteName || globalsSeo?.ogSiteName,
		title: pageSeo?.ogTitle || globalsSeo?.ogTitle || pageSeo?.metaImage || globalsSeo?.metaImage,
		type: pageSeo?.ogType || globalsSeo?.ogType || 'website',
		url: pageSeo?.ogUrl || globalsSeo?.ogUrl,
		video: pageSeo?.ogVideo || globalsSeo?.ogVideo
	}}
	twitter={{
		cardType: pageSeo?.twitterCardType || globalsSeo?.twitterCardType,
		description: pageSeo?.twitterDescription || globalsSeo?.twitterDescription,
		handle: pageSeo?.twitterCreator || globalsSeo?.twitterCreator,
		image:
			pageSeo?.twitterImage ||
			globalsSeo?.twitterImage ||
			`/api/og?headline=${pageTitle}&subline=Blog`,
		site: pageSeo?.twitterSite || globalsSeo?.twitterSite,
		title: pageSeo?.twitterTitle || globalsSeo?.twitterTitle
	}}
	robotsProps={{
		noarchive:
			(pageSeo?.robotsNoArchive || globalsSeo?.robotsNoArchive) === 'enabled' ? true : false,
		nofollow: (pageSeo?.robotsNoFollow || globalsSeo?.robotsNoFollow) === 'enabled' ? true : false,
		noimageindex:
			(pageSeo?.robotsNoIndex || globalsSeo?.robotsNoIndex) === 'enabled' ? true : false,
		noindex: (pageSeo?.robotsNoIndex || globalsSeo?.robotsNoIndex) === 'enabled' ? true : false,
		nosnippet:
			(pageSeo?.robotsNoSnippet || globalsSeo?.robotsNoSnippet) === 'enabled' ? true : false
	}}
/>
