import * as React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialMediaNav from './SocialMediaNav';
import NavItemLink from './NavItemLink';
import { navData } from '@data/navbar';

const Container = styled('header')({
  zIndex: 1001,
  background: '#fff',
  width: '100%',
  position: 'relative',
});

const Inner = styled('div')({
  maxWidth: 1200,
  display: 'flex',
  padding: '8px 12px',
  justifyContent: 'space-between',
  alignContent: 'center',
  margin: '0 auto',
  '@media screen and (min-width: 640px)': {
    padding: '35px 15px 15px',
  },
});

const NavWrapper = styled('div')<{ isOpen: boolean }>(({ isOpen }) => ({
  display: 'flex',
  gap: 20,
  backgroundColor: 'var(--colors-white)',
  '@media screen and (max-width: 640px)': {
    padding: 36,
    flexFlow: 'column wrap',
    position: 'fixed',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    opacity: isOpen ? '1' : '0',
    transform: isOpen ? 'translateX(100%)' : 'translateX(0%)',
    transition: 'transform 500ms ease-in-out, opacity 200ms ease-in-out',
    zIndex: 1,
  },
  '@media all and (min-width: 640px)': {
    alignItems: 'center',
  },
}));

const ButtonClose = styled('button')({
  background: 'transparent',
  border: 'none',
  position: 'absolute',
  top: 20,
  right: 20,
  width: 24,
  height: 24,
  cursor: 'pointer',
  '> span': {
    width: 24,
    height: 2,
    backgroundColor: '#000',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    left: 0,
    ':nth-of-type(1)': {
      transform: 'rotate(45deg)',
    },
    ':nth-of-type(2)': {
      transform: 'rotate(-45deg)',
    },
  },
  '@media all and (min-width: 640px)': {
    display: 'none',
  },
});

const ButtonBurger = styled('button')({
  background: 'transparent',
  border: 'none',
  marginRight: 20,
  cursor: 'pointer',
  '> span': {
    width: 24,
    height: 2,
    backgroundColor: '#000',
    display: 'inline-block',
    position: 'relative',
    '::before': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      position: 'absolute',
      top: 6,
      left: 0,
    },
    '::after': {
      content: '""',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      position: 'absolute',
      top: -6,
      left: 0,
    },
  },
  '@media all and (min-width: 640px)': {
    display: 'none',
  },
});

const Logo = styled('a')({
  padding: 8,
  cursor: 'pointer',
  '> img': {
    width: 80,
  },
  '@media screen and (min-width: 992px)': {
    '> img': {
      width: 120,
    },
  },
});

const Nav = styled('nav')({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  '> ul': {
    display: 'flex',
    listStyle: 'none',
    flexFlow: 'column wrap',
    '@media screen and (min-width: 640px)': {
      flexFlow: 'row wrap',
    },
    li: {
      marginRight: 20,
      ':last-child': {
        marginRight: 0,
      },
    },
  },
  '> a': {
    marginRight: 20,
    ':last-child': {
      marginRight: 0,
    },
  },
  '@media screen and (min-width: 640px)': {
    flexFlow: 'row wrap',
  },
  '@media screen and (min-width: 992px)': {
    marginRight: 40,
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

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Inner>
        <Link href="/">
          <Logo>
            <img src="/logo.png" />
          </Logo>
        </Link>
        <NavWrapper isOpen={isOpen}>
          <Nav>
            <ul>
              {navData.map((el) => (
                <NavItemLink
                  key={el.title}
                  path={el.url}
                  locale={router.locale}
                  text={el.title}
                  isActive={router.asPath === el.url}
                >
                  {el.dropdown.map((it) => (
                    <Link
                      key={it.title}
                      locale={router.locale}
                      href={it.url}
                      passHref
                    >
                      <NavLink isActive={router.asPath === it.url}>
                        {it.title}
                      </NavLink>
                    </Link>
                  ))}
                </NavItemLink>
              ))}
              {router.locale === 'sv' ? (
                <NavItemLink
                  path={router.asPath}
                  text="SWE"
                  locale={router.locale}
                  isActive={router.asPath === '/'}
                >
                  <Link href={router.asPath} locale="no" passHref>
                    <a>NOR</a>
                  </Link>
                  <Link href={router.asPath} locale="en-US" passHref>
                    <a>ENG</a>
                  </Link>
                </NavItemLink>
              ) : router.locale === 'no' ? (
                <NavItemLink
                  path={router.asPath}
                  text="NOR"
                  locale={router.locale}
                  isActive={router.asPath === '/'}
                >
                  <Link href={router.asPath} locale="sv" passHref>
                    <a>SWE</a>
                  </Link>
                  <Link href={router.asPath} locale="en-US" passHref>
                    <a>ENG</a>
                  </Link>
                </NavItemLink>
              ) : (
                <NavItemLink
                  path={router.asPath}
                  text="ENG"
                  locale={router.locale}
                  isActive={router.asPath === '/'}
                >
                  <Link href={router.asPath} locale="sv" passHref>
                    <a>SWE</a>
                  </Link>
                  <Link href={router.asPath} locale="no" passHref>
                    <a>NOR</a>
                  </Link>
                </NavItemLink>
              )}
            </ul>
          </Nav>
          <SocialMediaNav />
          <ButtonClose onClick={() => setIsOpen((prev) => !prev)}>
            <span></span>
            <span></span>
          </ButtonClose>
        </NavWrapper>
        <ButtonBurger onClick={() => setIsOpen((prev) => !prev)}>
          <span></span>
        </ButtonBurger>
      </Inner>
    </Container>
  );
};

export default Navbar;
