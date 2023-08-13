import type { NavigationItem } from './NavigationItem';
import type { SocialMedia } from './SocialMedia';
import type { Seo } from './Seo';
import type { Translations } from './Translations';

export interface Globals {
	navigationLabel: string;
	navigation: NavigationItem[];,
	footerNavigation: NavigationItem[];
	metaNavigation: NavigationItem[];
	translations: Translations;
	footerText: string;
	socialMedia: SocialMedia[];
	seo: Seo;
}
