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
				light: '#f2f1ed',
				dark: '#161616'
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
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem'
			}
		},
		extend: {
			animation: {
				borderGradient: 'background ease infinite',
				noise: 'noise 2s steps(1) infinite'
			},
			backgroundImage: (_theme) => ({
				noise: "url('/images/noise.png')"
			}),
			backgroundSize: {
				256: '256px'
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				noise: {
					'0%': { 'background-position': '0 0' },
					'10%': { 'background-position': '-5% -10%' },
					'20%': { 'background-position': '-15% 5%' },
					'30%': { 'background-position': '7% -25%' },
					'40%': { 'background-position': '20% 25%' },
					'50%': { 'background-position': '-25% 10%' },
					'60%': { 'background-position': '15% 5%' },
					'70%': { 'background-position': '0% 15%' },
					'80%': { 'background-position': '25% 35%' },
					'90%': { 'background-position': '-10% 10%' }
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
