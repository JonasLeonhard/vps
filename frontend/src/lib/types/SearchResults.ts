import type { DefaultPage } from './DefaultPage';

export interface SearchResults {
	data: DefaultPage[];
	pagination: {
		limit: number;
		offset: number;
		page: number;
		pages: number;
		total: number;
	};
}
