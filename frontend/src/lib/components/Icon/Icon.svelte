<script lang="ts">
	import type { Icon } from '$lib/types';

	import Error404 from './404.svelte';
	import Adjustments from './Adjustments.svelte';
	import Article from './Article.svelte';
	import Branch from './Branch.svelte';
	import Brightness from './Brightness.svelte';
	import ChevronDown from './ChevronDown.svelte';
	import ChevronRight from './ChevronRight.svelte';
	import ChevronUp from './ChevronUp.svelte';
	import Close from './Close.svelte';
	import Copied from './Copied.svelte';
	import Copy from './Copy.svelte';
	import ExternalLink from './ExternalLink.svelte';
	import Github from './Github.svelte';
	import Instagram from './Instagram.svelte';
	import Language from './Language.svelte';
	import Link from './Link.svelte';
	import LinkedIn from './LinkedIn.svelte';
	import Logo from './Logo.svelte';
	import Moon from './Moon.svelte';
	import Settings from './Settings.svelte';
	import Sun from './Sun.svelte';
	import Terminal from './Terminal.svelte';
	import Twitter from './Twitter.svelte';
	import Users from './Users.svelte';
	import YouTube from './YouTube.svelte';

	export let name: Icon;
	export let onClick: (e: MouseEvent) => void = () => null;
	export let onMouseover: (hovered: boolean) => void = () => null;
	export let onMousemove: (event: MouseEvent) => void = () => null;
	export let onMouseout: (event: Event) => void = () => null;
</script>

<button
	aria-label={name}
	on:click={onClick}
	on:mouseenter={() => onMouseover(true)}
	on:mouseover={() => onMouseover(true)}
	on:focus={() => onMouseover(true)}
	on:mouseleave={() => onMouseover(false)}
	on:focusout={() => onMouseover(false)}
	on:mousemove={onMousemove}
	on:mouseout={onMouseout}
	on:blur={onMouseout}
	{...$$restProps}
>
	{#if name === 'Settings'}
		<Settings />
	{:else if name === 'Adjustments'}
		<Adjustments />
	{:else if name === 'Copy'}
		<Copy />
	{:else if name === 'Copied'}
		<Copied />
	{:else if name === 'Terminal'}
		<Terminal />
	{:else if name === 'Logo'}
		<Logo />
	{:else if name === 'Close'}
		<Close />
	{:else if name === 'Branch'}
		<Branch />
	{:else if name === 'Article'}
		<Article />
	{:else if name === 'Language'}
		<Language />
	{:else if name === 'Link'}
		<Link />
	{:else if name === 'Brightness'}
		<Brightness />
	{:else if name === 'ChevronDown'}
		<ChevronDown />
	{:else if name === 'ChevronUp'}
		<ChevronUp />
	{:else if name === 'ChevronRight'}
		<ChevronRight />
	{:else if name === 'Sun'}
		<Sun />
	{:else if name === 'Moon'}
		<Moon />
	{:else if name === 'ExternalLink'}
		<ExternalLink />
	{:else if name === 'Instagram'}
		<Instagram />
	{:else if name === 'LinkedIn'}
		<LinkedIn />
	{:else if name === 'YouTube'}
		<YouTube />
	{:else if name === 'Twitter'}
		<Twitter />
	{:else if name === 'Github'}
		<Github />
	{:else if name === 'Users'}
		<Users />
	{:else if name === '404'}
		<Error404 />
	{:else}
		Icon undefined: {name}
	{/if}
</button>
