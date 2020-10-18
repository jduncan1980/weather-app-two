export const theme = {
	breakpoints: ['330px', '600px', '900px', '1200px'],
	space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
	fonts: {
		body:
			'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
		heading: 'inherit',
		monospace: 'Menlo, monospace',
	},
	fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	lineHeights: {
		body: 1.5,
		heading: 1.125,
	},
	colors: {
		text: '#000',
		background: '#fff',
		primary: '#0e5678',
		secondary: '#30c',
		muted: '#f6f6f6',
		trans: 'rgba(55,82,92,0.49)',
		cardBG: '#c1dce9',
		yellow: '#e5e28f'
	},
	text: {
		heading: {
			fontFamily: 'heading',
			lineHeight: 'heading',
			fontWeight: 'heading',
		},
		loading: {
			fontSize: [3, 4, 5, 6, 7],
		},
	},
	forms: {
		input: {},
	},
	layout: {
		container: {
			padding: '2%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
};
