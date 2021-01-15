export const generalStyleInteractions = `
appearance: none!important;
margin: 0;
padding: 0;
border-radius: var(--rounded-input);
border: 4px solid var(--unfocused-highlights);
background-color: var(--foreground-background-color);
color: var(--main-text);

&::placeholder {
  text-transform: capitalize;
  color: var(--placeholder-text);
  opacity: 1;
}
&:focus {
  border: 4px solid var(--focus-highlight);
  outline: none;
}
&:hover:not(:active) {
  filter: brightness(110%);
}
&:active {
  filter: brightness(90%);
}

height: 3.5em;
  @media screen and (max-width: 600px) {
    font-size: var(--font-me);
    height: 3.2em;
  }
`;

export default generalStyleInteractions;
