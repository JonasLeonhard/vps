import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url, data }) => {
  return {
    path: url.pathname,
    ...data
  };
};
