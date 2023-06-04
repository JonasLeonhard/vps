<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { MetaTags } from 'svelte-meta-tags';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<MetaTags
	title={data.page.seo.metaTitle || data.page.title || data.globals.seo.metaTitle}
	titleTemplate="%s | Jonas Leonhard"
	description={data.page.seo.metaDescription || data.globals.seo.metaDescription}
	canonical={data.page.seo.metaCanonicalUrl}
	openGraph={{
		type: data.page.seo.ogType || data.globals.seo.ogType,
		title:
			data.page.seo.ogTitle ||
			data.globals.seo.ogTitle ||
			data.page.seo.metaImage ||
			data.globals.seo.metaImage,
		description: data.page.seo.ogDescription || data.globals.seo.ogDescription,
		images: [
			{
				url:
					data.page.seo.ogImage ||
					data.globals.seo.ogImage ||
					data.page.seo.metaImage ||
					data.globals.seo.metaImage
			}
		],
		article: {
			authors:
				data.page.seo.ogTypeArticleAuthor?.map((author) => author.url) ||
				data.globals.seo.ogTypeArticleAuthor?.map((author) => author.url),
			expirationTime:
				data.page.seo.ogTypeArticleExpirationTime || data.globals.seo.ogTypeArticleExpirationTime,
			modifiedTime:
				data.page.seo.ogTypeArticleModifiedTime || data.globals.seo.ogTypeArticleModifiedTime,
			publishedTime:
				data.page.seo.ogTypeArticlePublishedTime || data.globals.seo.ogTypeArticlePublishedTime,
			tags: data.page.seo.ogTypeArticleTag || data.globals.seo.ogTypeArticleTag,
			section: data.page.seo.ogTypeArticleSection || data.globals.seo.ogTypeArticleSection
		},
		determiner: data.page.seo.ogDeterminer || data.globals.seo.ogDeterminer,
		audio: data.page.seo.ogAudio || data.globals.seo.ogAudio,
		video: data.page.seo.ogVideo || data.globals.seo.ogVideo,
		site_name: data.page.seo.ogSiteName || data.globals.seo.ogSiteName,
		url: data.page.seo.ogUrl || data.globals.seo.ogUrl
	}}
	twitter={{
		cardType: data.page.seo.twitterCardType || data.globals.seo.twitterCardType,
		title: data.page.seo.twitterTitle || data.globals.seo.twitterTitle,
		description: data.page.seo.twitterDescription || data.globals.seo.twitterDescription,
		image: data.page.seo.twitterImage || data.globals.seo.twitterImage,
		handle: data.page.seo.twitterCreator || data.globals.seo.twitterCreator,
		site: data.page.seo.twitterSite || data.globals.seo.twitterSite
	}}
	robotsProps={{
		noarchive:
			(data.page.seo.robotsNoArchive || data.globals.seo.robotsNoArchive) === 'enabled'
				? true
				: false,
		nosnippet:
			(data.page.seo.robotsNoSnippet || data.globals.seo.robotsNoSnippet) === 'enabled'
				? true
				: false,
		noindex:
			(data.page.seo.robotsNoIndex || data.globals.seo.robotsNoIndex) === 'enabled' ? true : false,
		noimageindex:
			(data.page.seo.robotsNoIndex || data.globals.seo.robotsNoIndex) === 'enabled' ? true : false,
		nofollow:
			(data.page.seo.robotsNoFollow || data.globals.seo.robotsNoFollow) === 'enabled' ? true : false
	}}
/>

<Header globals={data.globals} languages={data.languages} currentLanguage={data.lang} />
<main class="h-[calc(100vh+100px)] pt-20">
	<slot />
</main>
<Footer globals={data.globals} />
