import type { ContentBlock } from './ContentBlock';
import type { Seo } from './Seo';

export interface DefaultPage {
	id: string;
	title: string;
	status: string;
	slug: string;
	blocks: ContentBlock[];
	content: {
		intro: string;
		subline: string;
		cover: string;
	};
	seo: Seo;
}
