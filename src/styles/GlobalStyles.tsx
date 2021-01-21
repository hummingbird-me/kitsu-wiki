import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	// Variables
	:root {
		// Base Colours
		--background-color: #161116ff;
		--secondary-background-color: #312631ff;
		--foreground-background-color: #453345ff;
		--secondary-foreground-background-color: #6F5C6Fff;
		--cta-accept-color: #236147ff;

		// Shadow Colours
		--foreground-shadow: #16111688;

		// Gradient Invisible
		--gradient-background-color: #16111600;
		--gradient-secondary-background-color: #31263100;
		--gradient-foreground-background-color: #45334500;
		--gradient-secondary-foreground-background-color: #6F5C6F00;
		--gradient-cta-accept-color: #23614700;

		// Text Colours
		--main-text: #fff;
		--secondary-text: #ddd;
		--placeholder-text: #ccc;
		--links-text: #ff8c7c;

		// Tags
		--generic-tag: #576163;
		--media-subtype-tag: #382938;

		// Focus highlights
		--focus-highlight: #ff8c7c;
		--unfocused-highlights: #ff8c7c00;
		
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
	
	// Global-scoped animations
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
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
		color: var(--main-text);
	}

	// Generic styling for various elements
	option {
		text-transform: capitalize;
	}
	a {
		text-decoration: none;
		color: var(--links-text);
	}
	li {
		list-style: none;
	}
`;

export default GlobalStyles;
