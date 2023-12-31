import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data, url }) => {
	return {
		path: url.pathname,
		...data
	};
};
