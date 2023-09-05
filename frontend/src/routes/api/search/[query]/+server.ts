import { json } from '@sveltejs/kit';
import cms from '$lib/server/cms';

export async function GET({ cookies, params }) {
  const data = (
    await fetch(`${cms.backendUrl}/api/query`, {
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

  return json(data?.search?.map((item) => item.result) || []);
}
