import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Container = styled('li')({
  position: 'relative',
});

const DropdownMenu = styled('div')({
  position: 'absolute',
  top: '100%',
  left: 0,
  background: 'var(--colors-white)',
  padding: '10px 10px 5px',
  display: 'flex',
  flexFlow: 'column nowrap',
  '> *': {
    whiteSpace: 'nowrap',
    margin: '5px 0',
    ':hover': {
      color: 'var(--colors-orange)',
      transition: 'color 200ms ease-in-out',
    },
  },
});

const NavLink = styled('a')<{ isActive?: boolean }>(({ isActive }) => ({
  color: isActive ? 'var(--colors-orange)' : 'var(--colors-text)',
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  ':hover': {
    color: 'var(--colors-orange)',
  },
  '@media screen and (max-width: 640px)': {
    lineHeight: '1.8em',
    marginBottom: 5,
  },
}));

const NavItemLink = ({
  type = 'internal',
  path,
  text,
  locale = 'en-US',
  isActive = false,
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (type === 'external') {
    return (
      <Container
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <NavLink isActive={isActive} href={path}>
          {text}
        </NavLink>
        {isOpen && <DropdownMenu>{children}</DropdownMenu>}
      </Container>
    );
  }

  return (
    <Container
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href={path} locale={locale} passHref>
        <NavLink isActive={isActive}>{text}</NavLink>
      </Link>
      {isOpen && <DropdownMenu>{children}</DropdownMenu>}
    </Container>
  );
};

export default NavItemLink;
