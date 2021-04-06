import React, { CSSProperties, ReactElement } from 'react';
import styled from 'styled-components';

// Media
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HamburgerTypes {
  open?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenu({ open, setOpen }: HamburgerTypes): ReactElement {
  const checkOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const burgerActive = {
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    backgroundColor: '#0005',
    color: '#0000',
  } as CSSProperties;

  return (
    <Burger onClick={checkOpen} style={open ? burgerActive : undefined}>
      <FontAwesomeIcon icon={faBars} />
    </Burger>
  );
}

const Burger = styled.div`
  all: unset;
  display: none;
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 50px;
  background-color: var(--secondary-foreground-background-color);
  bottom: 0;
  left: 0;
  text-align: center;
  border-radius: var(--rounded-input) var(--rounded-input) 0 0;
  border: none;
  color: white;
  padding: 0;
  cursor: pointer;

  svg {
    font-size: var(--font-xxl);
    padding: 0;
    cursor: pointer;
  }

  @media screen and (max-width: 1400px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
