import type { RequestHandler } from '@sveltejs/kit';

import { PUBLIC_BACKEND_URL } from '$env/static/public';
import cms from '$lib/server/cms';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, params, url}) => {
	const page = url.searchParams.get('page');
	const limit = url.searchParams.get('limit');

	const data = (
		await fetch(`${PUBLIC_BACKEND_URL}/api/query`, {
			body: JSON.stringify({
				select: {
					...cms.kql.getSearch({ limit: limit ? +limit : undefined, page: page ? +page : undefined, query: params.query || '' })
				}
			}),
			headers: cms.getHeaders(cookies.get('lang') || 'en'),
			method: 'POST'
		})
			.then((res) => res.json())
			.catch((err) => console.error(err))
	)?.result;

	return json(data?.search || []);
}
