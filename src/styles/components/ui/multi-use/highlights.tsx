export const highlights = `
border: 4px solid var(--unfocused-highlights);

&:focus {
  border: 4px solid var(--focus-highlight);
  outline: none;
}
&:hover:not(:active) {
  filter: brightness(110%);
}
&:active {
  filter: brightness(90%);
}`;

export const highlightsWithin = `
border: 4px solid var(--unfocused-highlights);

&:focus-within {
  border: 4px solid var(--focus-highlight);
  outline: none;
}
&:hover:not(:active) {
  filter: brightness(110%);
}
&:active {
  filter: brightness(90%);
}`;

export default highlights;
