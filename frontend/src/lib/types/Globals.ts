import type { NavigationItem } from './NavigationItem';
import type { Seo } from './Seo';
import type { SocialMedia } from './SocialMedia';
import type { Translations } from './Translations';

export interface Globals {
	footerNavigation: NavigationItem[];
	metaNavigation: NavigationItem[];
	navigation: NavigationItem[];
	seo: Seo;
	socialMedia: SocialMedia[];
	translations: Translations;
}
