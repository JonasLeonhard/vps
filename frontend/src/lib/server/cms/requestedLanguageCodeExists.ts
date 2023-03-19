import type { Language } from '$lib/types/index';

const requestedLanguageCodeExists = (
	languages: Language[] | undefined,
	requestedLanguageCode: string
) => {
	return languages?.find((language: Language) => language.code === requestedLanguageCode);
};

export default requestedLanguageCodeExists;
