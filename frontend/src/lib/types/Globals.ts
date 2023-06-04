import type { NavigationItem } from './NavigationItem';
import type { SocialMedia } from './SocialMedia';

export interface Globals {
	navigation: NavigationItem[];,
	footerNavigation: NavigationItem[];
	metaNavigation: NavigationItem[];
	footerText: string;
	socialMedia: SocialMedia[];
}
