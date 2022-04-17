module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		container: {
			// you can configure the container to be centered
			center: true,
			// or have default horizontal padding
			padding: '1rem',
			// default breakpoints but with 40px removed
			screens: {
				sm: '600px',
				md: '728px',
				lg: '984px',
				xl: '1240px',
				'2xl': '1496px'
			}
		},
		extend: {
			// use https://www.tailwindshades.com/ to generate shades
			fontSize: {
				'clamp-p': 'clamp(0.875rem, 4vw, 1.3rem)',
				'clamp-h1': 'clamp(1.5rem, 8vw, 3rem)',
				'clamp-h2': 'clamp(1rem, 6vw, 2rem)'
			},
			width: {
				'clamp-p': 'clamp(40ch, 50%, 77ch)'
			},
			colors: {
				primary: {
					DEFAULT: '#00D6D3',
					50: '#8FFFFD',
					100: '#7AFFFD',
					200: '#51FFFD',
					300: '#29FFFC',
					400: '#00FFFB',
					500: '#00D6D3',
					600: '#009E9C',
					700: '#006664',
					800: '#002E2D',
					900: '#001f1f'
				},
				accent: {
					DEFAULT: '#8EC200',
					50: '#DCFF7B',
					100: '#D6FF66',
					200: '#CBFF3D',
					300: '#C0FF15',
					400: '#ACEB00',
					500: '#8EC200',
					600: '#658A00',
					700: '#3C5200',
					800: '#1d2700',
					900: '#131A00'
				}
			}
		}
	},
	plugins: []
};
