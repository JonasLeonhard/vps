import type { SearchFilter } from './SearchFilter';
import type { SearchResults } from './SearchResults';

export type SearchContext = {
	CARD_OFFSET: number;
	appliedSearchFilter: {
		max: null | string;
		min: null | string;
		page: number | string;
		query: null | string;
		tags: Set<string>;
	};
	applySearchFilter: () => void;
	containerScrollY: number;
	lastDeltaY: number;
	loadNextPage: boolean;
	loadPreviousPage: boolean;
	resultsSearchFilter: SearchFilter;
	searchLoading: boolean;
	searchResults: SearchResults | undefined;
	timelinePercentageScrolled: number;
};
