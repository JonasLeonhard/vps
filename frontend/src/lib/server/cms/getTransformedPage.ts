import cms from '$lib/server/cms';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import codeToHtml from '$lib/server/shiki';

import type { ContentBlock, DefaultPage } from '$lib/types';
import type { LayoutParams } from '../../../routes/$types';
import { getSearchFilter } from '../kql';

const transformCodeBlock = async (block: ContentBlock) => {
	const rendered = await codeToHtml(block.content.language, block.content.code);
	block.content.rendered = rendered;
};

const transformSearchBlock = async (block: ContentBlock, params: LayoutParams) => {
	const result: { searchFilter: { tags: string; created: string }[] } = (
		await fetch(`${PUBLIC_BACKEND_URL}/api/query`, {
			method: 'POST',
			headers: cms.getHeaders(params?.lang || 'en'),
			body: JSON.stringify({
				select: {
					...getSearchFilter()
				}
			})
		})
			.then((res) => res.json())
			.catch((err) => console.error(err))
	)?.result;

	block.content.searchFilter = result.searchFilter?.reduce(
		(acc, searchFilterItem) => {
			searchFilterItem.tags.split(',').forEach((tag) => {
				if (tag) acc.tags.add(tag.trim());
			});
			if (searchFilterItem.created) acc.created.add(searchFilterItem.created?.split(' ')?.at(0)); // "<DATE> <TIME>"
			return acc;
		},
		{
			tags: new Set(),
			created: new Set()
		}
	);
};

/**
 * Transforms page blocks. Eg.
 * - prerender type 'code' blocks with shiki andn add a rendered field.
 * - add a random offset to images block
 */
const getTransformedPage = async (page: DefaultPage, params: LayoutParams) => {
	// transform pageblocks:
	if (page?.blocks?.values) {
		for (const block of page.blocks.values()) {
			// prerender code blocks with shiki
			if (block.type === 'code') {
				await transformCodeBlock(block);
			} else if (block.type === 'search') {
				await transformSearchBlock(block, params);
			}
		}
	}

	return page;
};

export default getTransformedPage;
