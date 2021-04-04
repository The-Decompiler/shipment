module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: {
					"bg": "#ccccccff",
					"hex": "#9b9393ff"
				},
				btn: {
					"primary": "#ff5555ff",
					"secondary": "#1e0102ff",
					"hover": "#aa0000ff",
					"active": "#1e0102ff"
				}
			},
			fontFamily: {
				sans: ["Poppins", "Arial", "sans-serif"],
			},
			fontSize: {
				'lxs': '0.5rem'
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
