export interface NavigationItem {
	children: NavigationItem[];
	id: string;
	isOpen: boolean;
	popup: boolean;
	text: string;
	title: string | undefined;
	url: string;
}
