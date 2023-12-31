import * as kql from '../kql';
import getCookieLanguage from './getCookieLanguage';
import getDefaultLanguage from './getDefaultLanguage';
import getHeaders from './getHeaders';
import getLangReplacedUrl from './getLangReplacedUrl';
import getPreferedBrowserLanguage from './getPreferedBrowserLanguage';
import getTransformedGlobals from './getTransformedGlobals';
import getTransformedPage from './getTransformedPage';
import requestedLanguageCodeExists from './requestedLanguageCodeExists';

const cms = {
	getCookieLanguage,
	getDefaultLanguage,
	getHeaders,
	getLangReplacedUrl,
	getPreferedBrowserLanguage,
	getTransformedGlobals,
	getTransformedPage,
	kql,
	requestedLanguageCodeExists
};

export default cms;
