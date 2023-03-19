import type { Language } from '$lib/types/index';

const getDefaultLanguage = (languages: Language[] | undefined): Language => {
	return languages?.find((language: Language) => language.default) as Language;
};

export default getDefaultLanguage;
