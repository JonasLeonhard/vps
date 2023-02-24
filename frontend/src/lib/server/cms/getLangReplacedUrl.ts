/**
 * replaces the first subroute in the given 'url',
 * eg url='http://localhost:5173/en/blog?a=b' with langCode='de' would return
 * 'http://localhost:5173/de/blog?a=b'
 */
const getLangReplacedUrl = (url: string, langCode: string): string => {
	const requestUrl = new URL(url?.toString() || `/${langCode}`);
	const requestLang = requestUrl.pathname.split('/')?.[1];
	requestUrl.pathname = requestUrl.pathname.replace(requestLang, langCode.toString());
	return requestUrl.toString();
};

export default getLangReplacedUrl;
