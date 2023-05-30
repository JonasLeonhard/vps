export type ContentBlock = {
	type: string;
	isHidden: boolean;
	id: string;
	content: {
		items: any[]; // TODO: Add type
	};
};
