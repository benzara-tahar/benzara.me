module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {
			// use https://www.tailwindshades.com/ to generate shades
			colors: {
				primary: {
					DEFAULT: '#3B82F6',
					50: '#EBF2FE',
					100: '#D7E6FD',
					200: '#B0CDFB',
					300: '#89B4FA',
					400: '#629BF8',
					500: '#3B82F6',
					600: '#0B61EE',
					700: '#084BB8',
					800: '#063583',
					900: '#041F4D'
				},
				secondary: {
					DEFAULT: '#65A30D',
					50: '#BFF474',
					100: '#B6F261',
					200: '#A5EF3B',
					300: '#93EC15',
					400: '#7CC910',
					500: '#65A30D',
					600: '#456F09',
					700: '#253B05',
					800: '#040701',
					900: '#000000'
				},
				accent: {
					DEFAULT: '#FACC15',
					50: '#FEF3C9',
					100: '#FDEFB5',
					200: '#FDE68D',
					300: '#FCDD65',
					400: '#FBD53D',
					500: '#FACC15',
					600: '#D2A904',
					700: '#9B7D03',
					800: '#655102',
					900: '#2E2501'
				}
			}
		}
	},
	plugins: []
};
