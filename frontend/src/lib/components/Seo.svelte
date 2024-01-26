<script lang="ts">
	import type { PageData } from '$lib/types';

	import { getContext } from 'svelte';
	import { MetaTags } from 'svelte-meta-tags';

	const {
		globals,
		page: { seo, title }
	} = getContext<PageData>('pageData');
</script>

<MetaTags
	title={seo?.metaTitle || title || globals.seo?.metaTitle}
	titleTemplate="%s | Jonas Leonhard"
	description={seo?.metaDescription || globals.seo?.metaDescription}
	canonical={seo?.metaCanonicalUrl}
	openGraph={{
		article: {
			authors:
				seo?.ogTypeArticleAuthor?.map((author) => author.url) ||
				globals.seo?.ogTypeArticleAuthor?.map((author) => author.url),
			expirationTime: seo?.ogTypeArticleExpirationTime || globals.seo?.ogTypeArticleExpirationTime,
			modifiedTime: seo?.ogTypeArticleModifiedTime || globals.seo?.ogTypeArticleModifiedTime,
			publishedTime: seo?.ogTypeArticlePublishedTime || globals.seo?.ogTypeArticlePublishedTime,
			section: seo?.ogTypeArticleSection || globals.seo?.ogTypeArticleSection,
			tags: seo?.ogTypeArticleTag || globals.seo?.ogTypeArticleTag
		},
		audio: seo?.ogAudio || globals.seo?.ogAudio,
		description: seo?.ogDescription || globals.seo?.ogDescription,
		determiner: seo?.ogDeterminer || globals.seo?.ogDeterminer,
		images: [
			{
				url:
					seo?.ogImage ||
					globals.seo?.ogImage ||
					seo?.metaImage ||
					globals.seo?.metaImage ||
					`/api/og?headline=${title}&subline=Blog`
			}
		],
		site_name: seo?.ogSiteName || globals.seo?.ogSiteName,
		title: seo?.ogTitle || globals.seo?.ogTitle || seo?.metaImage || globals.seo?.metaImage,
		type: seo?.ogType || globals.seo?.ogType || 'website',
		url: seo?.ogUrl || globals.seo?.ogUrl,
		video: seo?.ogVideo || globals.seo?.ogVideo
	}}
	twitter={{
		cardType: seo?.twitterCardType || globals.seo?.twitterCardType,
		description: seo?.twitterDescription || globals.seo?.twitterDescription,
		handle: seo?.twitterCreator || globals.seo?.twitterCreator,
		image:
			seo?.twitterImage || globals.seo?.twitterImage || `/api/og?headline=${title}&subline=Blog`,
		site: seo?.twitterSite || globals.seo?.twitterSite,
		title: seo?.twitterTitle || globals.seo?.twitterTitle
	}}
	robotsProps={{
		noarchive: (seo?.robotsNoArchive || globals.seo?.robotsNoArchive) === 'enabled' ? true : false,
		nofollow: (seo?.robotsNoFollow || globals.seo?.robotsNoFollow) === 'enabled' ? true : false,
		noimageindex: (seo?.robotsNoIndex || globals.seo?.robotsNoIndex) === 'enabled' ? true : false,
		noindex: (seo?.robotsNoIndex || globals.seo?.robotsNoIndex) === 'enabled' ? true : false,
		nosnippet: (seo?.robotsNoSnippet || globals.seo?.robotsNoSnippet) === 'enabled' ? true : false
	}}
/>
