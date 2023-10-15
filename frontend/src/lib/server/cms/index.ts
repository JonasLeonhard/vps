import * as kql from '../kql';
import getCookieLanguage from './getCookieLanguage';
import getDefaultLanguage from './getDefaultLanguage';
import getHeaders from './getHeaders';
import getLangReplacedUrl from './getLangReplacedUrl';
import getPreferedBrowserLanguage from './getPreferedBrowserLanguage';
import requestedLanguageCodeExists from './requestedLanguageCodeExists';
import getTransformedPage from './getTransformedPage';
import getTransformedGlobals from './getTransformedGlobals';

const cms = {
	getCookieLanguage,
	getDefaultLanguage,
	getHeaders,
	getLangReplacedUrl,
	getPreferedBrowserLanguage,
	kql,
	requestedLanguageCodeExists,
	getTransformedPage,
	getTransformedGlobals
};

export default cms;
