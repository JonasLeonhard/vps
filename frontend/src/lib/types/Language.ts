export interface Language {
	code: string;
	default: boolean;
	direction: 'ltr' | 'rtl';
	locale: string[];
	name: string;
	rules: { [key: string]: string };
	url: string;
}
