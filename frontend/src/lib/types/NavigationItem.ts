export interface NavigationItem {
	id: string;
	url: string;
	text: string;
	title: string | undefined;
	popup: boolean;
	isOpen: boolean;
	children: NavigationItem[];
}
