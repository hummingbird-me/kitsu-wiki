import React, { CSSProperties, ReactElement } from 'react';
import styled, { css } from 'styled-components';

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

  return (
    <Burger onClick={checkOpen} style={open ? burgerActive : undefined}>
      <svg
        width='2em'
        height='2em'
        viewBox='0 0 16 16'
        className='bi bi-list'
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill-rule='evenodd'
          d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
        />
      </svg>
    </Burger>
  );
}

const burgerActive = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  backgroundColor: '#0005',
  color: '#0000',
} as CSSProperties;

const Burger = styled.div`
  all: unset;
  display: none;
  position: fixed;
  z-index: 50;
  width: 50px;
  height: 50px;
  background-color: var(--secondary-foreground-background-color);
  bottom: 20px;
  left: 20px;
  text-align: center;
  border-radius: 10px;
  border: none;
  color: white;
  padding: 0;
  cursor: pointer;

  svg {
    padding: 0;
    margin: 0;
    margin-top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  @media screen and (max-width: 1400px) {
    display: block;
  }
`;
