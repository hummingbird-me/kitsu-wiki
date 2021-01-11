import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	// Variables
	:root {
		// Base Colours
		--background-color: #161116;
		--secondary-background-color: #312631;
		--foreground-background-color: #453345;
		--cta-accept-color: #236147;

		// Shadow Colours
		--foreground-shadow: #16111688;

		// Text Colours
		--main-text: #fff;
		--secondary-text: #ddd;
		--placeholder-text: #ccc;
		--links-text: #ff8c7c;
		
		// Border-Radius
		--rounded-input: 7px;

		// Font Sizes
		--font-xs: 0.6rem;
		--font-sm: 0.8rem;
		--font-me: 1rem;
		--font-lg: 1.2rem;
		--font-xl: 1.4rem;
		--font-xxl: 1.8rem;

		// Font Weights
		--light: 300;
		--regular: 400;
		--semi-bold: 600;
		--bold: 700;
		--extra-bold: 800;

		// Standard Breakpoints
		--breakpoint-xs: 0;
		--breakpoint-sm: 576px;
		--breakpoint-md: 768px;
		--breakpoint-lg: 992px;
		--breakpoint-xl: 1200px;
	}

	// border-box
	// dangerous setting of transitions
	// TODO: Move transitions to where it's needed only
	* {
		box-sizing: border-box;
		text-rendering: optimizeLegibility;
	}

	// General font
	body {
		font-family: "Open Sans", sans-serif;
		background-color: var(--secondary-background-color);
	}

	// Generic styling for various elements
	input,
	button,
	select {
		appearance: none!important;
		margin: 0;
		padding: 0;
		border-radius: var(--rounded-input);
		border: none;
		background-color: var(--foreground-background-color);
		color: var(--main-text);


		&::placeholder {
			text-transform: capitalize;
			color: var(--placeholder-text);
			opacity: 1;
		}
		&:focus {
			border: 2px solid var(--links-text);
			outline: none;
		}
	}
	option {
		text-transform: capitalize;
	}
	a {
		text-decoration: none;
		color: var(--links-text);
	}
`;

export default GlobalStyles;
