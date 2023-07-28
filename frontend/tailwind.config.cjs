/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		colors: {
			// main colors
			black: '#000000',
			gray: '#abafb3',
			lightGray: '#191821',
			white: '#ffffff',
			primary: '#f26c4f',
			secondary: '#c473ff',
			tertiary: '#ff4caf',
			info: '#3498db',
			success: '#20bf6b',
			warning: '#f7b731',
			error: '#e74c3c',

			light: '#f5f6fa',
			dark: '#0f0d0b',
			'bg-accent': {
				light: '#d3d3d3',
				dark: '#101010'
			},
			text: {
				light: '#000000',
				accent: '#abafb3',
				dark: '#ffffff'
			},

			// extra colors
			fusionRed: '#fc5c65',
			desire: '#eb3b5a',
			orangeHibiscus: '#fd9644',
			benuikonBronze: '#fa8231',
			flirtatious: '#fed330',
			nycTaxi: '#f7b731',
			reptileGreen: '#26de81',
			algalFuel: '#20bf6b',
			maximumBlueGreen: '#2bcbba',
			turquioseTopaz: '#0fb9b1',
			highBlue: '#45aaf2',
			boyzone: '#2d98da',
			c64Ntsc: '#4b7bec',
			royalBlue: '#4b7bec',
			lighterPurple: '#a55eea',
			gloomyPurple: '#8854d0'
		},
		fontFamily: {
			pixel: ['ark-pixel-16px-monospaced-latin'],
			interReg: ['inter-regular'],
			interVar: ['inter-var']
		},
		extend: {
			animation: {
				borderGradient: 'background ease infinite'
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
