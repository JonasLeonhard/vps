import type { Language } from '$lib/types/index';

const getPreferedBrowserLanguage = (
	languages: Language[],
	headers: Headers
): Language | undefined => {
	const acceptedLang = headers.get('accept-language')?.match(/[a-zA-Z-]{2,10}/gm);
	return languages.find((language: Language) => acceptedLang?.includes(language.code));
};

export default getPreferedBrowserLanguage;
