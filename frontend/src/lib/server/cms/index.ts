import { backendUrl } from '$env/static/private';
import * as kql from '../kql';
import getCookieLanguage from './getCookieLanguage';
import getDefaultLanguage from './getDefaultLanguage';
import getHeaders from './getHeaders';
import getLangReplacedUrl from './getLangReplacedUrl';
import getPreferedBrowserLanguage from './getPreferedBrowserLanguage';
import requestedLanguageCodeExists from './requestedLanguageCodeExists';

const cms = {
	backendUrl,
	getCookieLanguage,
	getDefaultLanguage,
	getHeaders,
	getLangReplacedUrl,
	getPreferedBrowserLanguage,
	requestedLanguageCodeExists,
	kql
};

export default cms;
