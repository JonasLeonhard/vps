import codeToHtml from '$lib/server/shiki';

import type { ContentBlock, DefaultPage } from '$lib/types';

const transformImagesBlock = async (block: ContentBlock) => {
	for (const image of block.content.images) {
		image.serverOffset = Math.random() * 160;
		image.serverThumbOffset = Math.random() * 20;
	}
};

const transformCodeBlock = async (block: ContentBlock) => {
	const rendered = await codeToHtml(block.content.language, block.content.code);
	block.content.rendered = rendered;
};

/**
 * Transforms page blocks. Eg.
 * - prerender type 'code' blocks with shiki andn add a rendered field.
 * - add a random offset to images block
 */
const getTransformedPage = async (page: DefaultPage) => {
	// transform pageblocks:
	if (page?.blocks?.values) {
		for (const block of page.blocks.values()) {
			// prerender code blocks with shiki
			if (block.type === 'code') {
				await transformCodeBlock(block);
			}

			if (block.type === 'images') {
				await transformImagesBlock(block);
			}
		}
	}

	return page;
};

export default getTransformedPage;
