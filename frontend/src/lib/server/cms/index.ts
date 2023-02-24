import { backendAccount, backendUrl as cmsUrl } from '$env/static/private';

/**
 * Sets the Basic-Authorization from .env file & sets the X-Language for the api.
 */
export const getHeaders = (langCode: string) => ({
	Authorization: `Basic ${Buffer.from(backendAccount).toString('base64')}`,
	'X-Language': langCode
});

// reexport
export const backendUrl = cmsUrl;
