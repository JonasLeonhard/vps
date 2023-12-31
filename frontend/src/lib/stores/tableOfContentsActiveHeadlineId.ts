import type { TableOfContentsActiveHeadlineId } from '$lib/types';

import { writable } from 'svelte/store';

const tableOfContentsActiveHeadlineId = writable<TableOfContentsActiveHeadlineId>();

export { tableOfContentsActiveHeadlineId };
