import { backendUrl, getHeaders } from '$lib/server/cms';
import type { PageServerLoad } from './$types';

type Data = { test: string };

export const load: PageServerLoad<Data> = async ({ fetch }) => {
	const data = await fetch(`${backendUrl}/api/pages/home`, {
		method: 'GET',
		headers: getHeaders('de')
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));

	console.log('data:', data);

	return {
		test: data?.data?.content?.text
	};
};
