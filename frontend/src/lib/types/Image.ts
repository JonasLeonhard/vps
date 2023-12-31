export type Image = {
	content: {
		alt: string;
		caption: string;
		copyright: string;
		focus: string;
		loading?: 'eager' | 'lazy';
		uuid: string;
	};
	dimensions: {
		height: number;
		orientation: 'landscape' | 'portrait';
		ratio: number;
		width: number;
	};
	exif: {
		aperture?: string;
		camera: {
			make?: string;
			model?: string;
		};
		exposure?: string;
		focalLength?: string;
		isColor?: boolean;
		iso?: string;
		location: {
			lat?: number;
			lng?: number;
		};
		timestamp: number;
	};
	extension: string;
	filename: string;
	hash: string;
	id: string;
	isReadable: boolean;
	isResizable: boolean;
	isWritable: boolean;
	mime: string;
	modified: string;
	name: string;
	niceSize: string;
	root: string;
	safeName: string;
	size: number;
	sizes?: string;
	srcset?: string;
	srcsetName?: string;
	template?: string;
	type: string;
	url: string;
};
