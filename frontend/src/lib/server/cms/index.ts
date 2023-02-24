import { backendUrl } from '$env/static/private';
import getHeaders from './getHeaders';
// reexport
const cms = {
	getHeaders,
	backendUrl
};

export default cms;
