import type { Globals } from '$lib/types';

import { CURRENT_GIT_HASH } from '$env/static/private';

const getTransformedGlobals = async (globals: Globals) => {
	globals.translations.currentGitHash = CURRENT_GIT_HASH;

	return globals;
};

export default getTransformedGlobals;
