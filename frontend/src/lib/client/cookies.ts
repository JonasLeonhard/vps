/* eslint-disable @typescript-eslint/no-unused-vars */
// TODO: remove any types.
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Cookies } from '@sveltejs/kit';

const cookies: Cookies = {
	get(name: string, _opts: any): string | undefined {
		let value = '';
		document.cookie.split(';').forEach((e) => {
			if (e.includes(name)) {
				value = e.split('=')[1];
			}
		});
		return value;
	},

	set(_name: string, _value: string, _opts: any) {
		console.error('set is not implemented yet');
	},

	delete(_name: string, _opts: any) {
		console.error('delete is not implemented yet');
	},

	serialize(name: string, _value: string, _opts: any): string {
		console.error('serialize is not implemented yet');
		return name;
	}
};

export default cookies;
