This folder allows rendering svelte components via vercels satori package as a PNG.

# Step 01:

Add the rawFontsVitePlugin to your vite.config.ts

```typescript
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import rawFonts from './src/lib/server/satori/rawFontsVitePlugin';

const config: UserConfig = {
	plugins: [sveltekit(), rawFonts(['.ttf'])]
};

export default config;
```

# Step 02:

Create a Endpoint where your png image should be rendered. Here in routes/api/og/+server.ts

```typescript
export const prerender = true;

import { OgImage } from '$lib/components';
import renderComponentToPng from '$lib/server/satori/renderComponentToPng';

// we use a Vite plugin to turn this import into the result of fs.readFileSync during build
import sourceInter from '../../../../static/fonts/Inter-Regular.ttf';

export const GET = async ({ params }) => {
	const width = 1200;
	const height = 600;
	return renderComponentToPng({
		component: OgImage,
		props: { width, height },
		height,
		width,
		fonts: [
			{
				name: 'Inter-Var',
				data: Buffer.from(sourceInter)
			}
		]
	});
};
```

# Your minimal OgImage component

in lib/components/OgImage.svelte

```.svelte
<script lang="ts">
	// INFO: this component gets loaded by Satori in renderComponentToPng. It only supports css/html that satori supports: https://github.com/vercel/satori#css
	// og image rendered by satori in GET api/og
	export let width: number;
	export let height: number;
</script>

{width} x {height}
```
