import styled from 'styled-components';

const SearchMediaLayout = styled.div`
  position: absolute;

  height: 100%;
  width: 100%;
  min-height: 30rem;
  top: 0;
  left: 0;

  display: grid;
  grid-template-columns:
    minmax(100px, 1fr)
    minmax(100px, 850px)
    minmax(100px, 1fr);
  align-content: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    grid-template-columns: 0 6fr 0;
  }
  .search-layout {
    grid-column: 2;

    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr 1fr 1fr 1fr 1fr 1fr 1.2fr 1fr;
    grid-template-rows: auto;
    gap: 25px;

    align-content: center;
    justify-content: center;

    @media screen and (max-width: 600px) {
      grid-template-columns: 0 repeat(8, 1fr) 0;
      gap: 10px;
    }

    .logo {
      grid-column: 3 / span 6;
      grid-row: 1;
      margin-bottom: 30px;

      @media screen and (max-width: 600px) {
        margin: 20px;
        margin-bottom: 40px;
        grid-column: 3 / span 6;
      }
    }

    .new-entry {
      grid-column: 1 / span 7;
      grid-row: 2;
      @media screen and (max-width: 600px) {
        grid-column: 2 / span 5;
      }
    }
    .media-type-dropdown {
      grid-column: span 3 / 11;
      grid-row: 2;
      @media screen and (max-width: 600px) {
        grid-column: span 3 / 10;
      }
    }
    .searchbox {
      grid-row: 3;
      grid-column: 1 / span 10;
      @media screen and (max-width: 600px) {
        grid-column: 2 / span 8;
      }
    }
  }

  .media-type-dropdown {
    position: relative;
    background-color: var(--foreground-background-color);
    border-radius: var(--rounded-input);
    box-sizing: border-box;
    transition-property: transform;
    transition-duration: 0.1s;

    select {
      width: 100%;
      padding-right: 10px;
      padding-left: 40px;
      &:hover:not(:focus) {
        filter: brightness(110%);
      }
      &:active {
        filter: brightness(90%);
      }
    }
    svg {
      position: absolute;
      z-index: 10;
      width: 15px;
      height: 15px;
      top: 53%;
      left: 15px;
      transform: translateY(-50%);
      fill: var(--secondary-text);
    }

    &:focus-within {
      select {
        padding-left: 38px;
        border: 2px solid var(--links-text);
        outline: none;
        border-radius: var(--rounded-input) var(--rounded-input) 0 0;
      }
      svg {
        fill: var(--main-text) !important;
      }
    }
  }
  .searchbox {
    position: relative;
    background-color: var(--foreground-background-color);
    border-radius: var(--rounded-input);
    box-sizing: border-box;

    input {
      width: 100%;
      padding-right: 10px;
      padding-left: 40px;
      padding-top: 2px;
      padding-bottom: 2px;
    }
    svg {
      position: absolute;
      z-index: 10;
      width: 15px;
      height: 15px;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      fill: var(--placeholder-text);
    }
    &:focus-within {
      input {
        padding-left: 38px;
        border: 2px solid var(--links-text);
        outline: none;
        padding-top: 0px;
        padding-bottom: 0px;

        &:hover:not(:focus) {
          filter: brightness(110%);
        }
        &:active {
          filter: brightness(90%);
        }
      }
      svg {
        fill: var(--main-text) !important;
      }
    }
  }
`;

export default SearchMediaLayout;
