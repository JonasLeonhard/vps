import { backendAccount, backendUrl as cmsUrl } from '$env/static/private';

/**
 * Sets the Basic-Authorization from .env file & sets the X-Language for the api.
 */
export const getHeaders = (langCode: string) => {
	console.log(backendAccount);
	const header = {
		Authorization: `Basic ${Buffer.from(backendAccount).toString('base64')}`,
		'X-Language': langCode,
		'Content-type': 'application/json; charset=UTF-8'
	};
	console.log(header);
	return header;
};

// reexport
export const backendUrl = cmsUrl;
