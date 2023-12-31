import { PUBLIC_BACKEND_URL } from '$env/static/public';
import cms from '$lib/server/cms';
import { json } from '@sveltejs/kit';

export async function GET({ cookies, params }) {
	const data = (
		await fetch(`${PUBLIC_BACKEND_URL}/api/query`, {
			body: JSON.stringify({
				select: {
					...cms.kql.getSearch(params.query)
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
