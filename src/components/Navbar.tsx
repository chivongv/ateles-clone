import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SocialMediaNav from './SocialMediaNav';

const Container = styled('header')({
  position: 'fixed',
  zIndex: 1001,
  background: '#fff',
  width: '100vw',
});

const Inner = styled('div')({
  maxWidth: 1200,
  display: 'flex',
  padding: '10px 15px',
  justifyContent: 'space-between',
  margin: '0 auto',
});

const NavWrapper = styled('div')({
  display: 'flex',
  gap: 20,
});

const Logo = styled('a')({
  padding: 8,
  cursor: 'pointer',
  '> img': {
    width: 80,
  },
});

const Nav = styled('nav')({
  position: 'relative',
  '> a': {
    marginRight: 10,
    ':last-child': {
      marginRight: 0,
    },
  },
});

const NavLink = styled('a')<{ isActive?: boolean }>(({ isActive }) => ({
  color: isActive ? 'var(--colors-orange)' : 'var(--colors-text)',
  cursor: 'pointer',
  fontWeight: 500,
  ':hover': {
    color: 'var(--colors-orange)',
  },
}));

const Navbar = () => {
  const router = useRouter();

  return (
    <Container>
      <Inner>
        <Link href="/">
          <Logo>
            <img src="/logo.png" />
          </Logo>
        </Link>
        <NavWrapper>
          <Nav>
            <Link href="/our-offer" passHref>
              <NavLink isActive={router.asPath === '/our-offer'}>
                What we do
              </NavLink>
            </Link>
            <Link href="/about-us" passHref>
              <NavLink isActive={router.asPath === '/about-us'}>Info</NavLink>
            </Link>
            <Link href="https://www.atelesconsulting.com/eng" passHref>
              <NavLink>Eng</NavLink>
            </Link>
          </Nav>
          <SocialMediaNav />
        </NavWrapper>
      </Inner>
    </Container>
  );
};

export default Navbar;
