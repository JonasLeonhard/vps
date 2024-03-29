import type { Image } from '$lib/types';

import type { ContentBlock } from './ContentBlock';
import type { Seo } from './Seo';

export interface DefaultPage {
	blocks: ContentBlock[];
	content: {
		intro: string;
		subline: string;
	};
	cover?: Image;
	created: string;
	exerpt?: string;
	id: string;
	intendedTemplate: string;
	seo: Seo;
	slug: string;
	status: string;
	tags: string;
	title: string;
	url: string;
}
