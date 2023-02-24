import { backendAccount } from '$env/static/private';

/**
 * Sets the Basic-Authorization from .env file & sets the X-Language for the api.
 */
const getHeaders = (langCode: string) => ({
	Authorization: `Basic ${Buffer.from(backendAccount).toString('base64')}`,
	'X-Language': langCode
});

export default getHeaders;
