import { CURRENT_GIT_HASH } from '$env/static/private';
import type { Globals } from '$lib/types';

const getTransformedGlobals = async (globals: Globals) => {
  globals.translations.currentGitHash = CURRENT_GIT_HASH;

  return globals;
};

export default getTransformedGlobals;
