/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// reference library only
		"./lib/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			boxShadow: {
				"custom": " -6px 6px 18px #c2c2c2",
			},
		},
	},
	plugins: [],
};
