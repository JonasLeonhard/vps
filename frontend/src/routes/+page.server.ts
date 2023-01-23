import type { PageServerLoad } from './$types';

type Data = { test: string };

export const load: PageServerLoad<Data> = async () => {
	return {
		test: 'test-page.server.ts-data'
	};
};
