import type { NavigationItem } from './NavigationItem';
import type { SocialMedia } from './SocialMedia';
import type { Seo } from './Seo';

export interface Globals {
	navigation: NavigationItem[];,
	footerNavigation: NavigationItem[];
	metaNavigation: NavigationItem[];
	footerText: string;
	socialMedia: SocialMedia[];
	seo: Seo;
}
