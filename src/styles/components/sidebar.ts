import styled from 'styled-components';

export const Sidenav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--secondary-background-color);
  width: 300px;
  height: 100%;
  box-shadow: 0 0 10px black;

  @media screen and (max-width: 1400px) {
    display: none;
  }

  .main-navigation {
    nav ul li {
      list-style: none;
      margin-bottom: 30px;
      .active-tab {
        color: $highlighted-text;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        font-weight: 800;
        font-size: 1em;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .kitsu-logo {
    margin-top: 30px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    svg {
      width: 70%;
    }
  }
`;

export const Nav = styled.nav`
  ul li {
    list-style: none;
    margin-bottom: 30px;
    .active-tab {
      color: $highlighted-text;
    }
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: white;
      font-weight: 800;
      font-size: 1em;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Sidenav;
