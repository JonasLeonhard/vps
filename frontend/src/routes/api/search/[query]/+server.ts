import { json } from '@sveltejs/kit';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import cms from '$lib/server/cms';

export async function GET({ cookies, params }) {
  const data = (
    await fetch(`${PUBLIC_BACKEND_URL}/api/query`, {
      method: 'POST',
      headers: cms.getHeaders(cookies.get('lang') || 'en'),
      body: JSON.stringify({
        select: {
          ...cms.kql.getSearch(params.query)
        }
      })
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
  )?.result;

  return json(data?.search || []);
}
