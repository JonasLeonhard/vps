import type { DefaultPage } from './DefaultPage';
import type { Globals } from './Globals';
import type { Language } from './Language';

export type PageData = {
	globals: Globals;
	lang: Language;
	languages: Language[];
	page: DefaultPage;
	path?: string;
};
