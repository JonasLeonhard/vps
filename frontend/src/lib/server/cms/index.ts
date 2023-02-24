import { backendUrl } from '$env/static/private';
import getHeaders from './getHeaders';
import getLangReplacedUrl from './getLangReplacedUrl';

// reexport
const cms = {
	getHeaders,
	getLangReplacedUrl,
	backendUrl
};

export default cms;
