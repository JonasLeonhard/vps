import type { ContentBlock } from './ContentBlock';
import type { Seo } from './Seo';
import type { Image } from '$lib/types';

export interface DefaultPage {
	id: string;
	title: string;
	status: string;
	slug: string;
	blocks: ContentBlock[];
	content: {
		intro: string;
		subline: string;
	};
	cover?: Image;
	seo: Seo;
	url: string;
	intendedTemplate: string;
}
