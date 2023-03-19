import type { Language } from '$lib/types/index';

const getCookieLanguage = (
	languages: Language[],
	cookiesLanguageCode: string | undefined
): Language | undefined => {
	return languages.find((language: Language) => language.code === cookiesLanguageCode);
};

export default getCookieLanguage;
