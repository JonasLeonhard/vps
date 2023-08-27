import type { NavigationItem } from './NavigationItem';
import type { SocialMedia } from './SocialMedia';
import type { Seo } from './Seo';
import type { Translations } from './Translations';

export interface Globals {
	navigation: NavigationItem[];
	footerNavigation: NavigationItem[];
	metaNavigation: NavigationItem[];
	translations: Translations;
	socialMedia: SocialMedia[];
	seo: Seo;
}
