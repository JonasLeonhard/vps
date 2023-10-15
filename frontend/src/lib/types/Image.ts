export type Image = {
	content: {
		caption: string;
		copyright: string;
		alt: string;
		uuid: string;
		focus: string;
		loading?: 'lazy' | 'eager';
	};
	/** added in setTransformedBlocks for images block only */
	serverOffset?: number;
	/** added in setTransformedBlocks for images block only */
	serverThumbOffset?: number;
	dimensions: {
		width: number;
		height: number;
		ratio: number;
		orientation: 'landscape' | 'portrait';
	};
	exif: {
		camera: {
			make?: string;
			model?: string;
		};
		location: {
			lat?: number;
			lng?: number;
		};
		timestamp: number;
		exposure?: string;
		aperture?: string;
		iso?: string;
		focalLength?: string;
		isColor?: boolean;
	};
	extension: string;
	filename: string;
	hash: string;
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
	type: string;
	url: string;
	id: string;
	template?: string;
};
