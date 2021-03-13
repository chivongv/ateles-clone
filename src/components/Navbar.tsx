import styled from '@emotion/styled';

const Container = styled('header')({
  display: 'flex',
  position: 'fixed',
  padding: '10px 15px',
  zIndex: 1001,
  background: '#fff',
  width: '100%',
  justifyContent: 'space-between',
});

const Nav = styled('nav')({
  position: 'relative',
});

const LinkList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
});

const Link = styled('li')({
  marginRight: 10,
  ':last-child': {
    marginRight: 0,
  },
});

const Logo = styled('a')({
  padding: 8,
  '> img': {
    width: 80,
  },
});

const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src="/logo.png" />
      </Logo>
      <Nav>
        <LinkList>
          <Link>
            <a href="/our-offers">What we do</a>
          </Link>
          <Link>
            <a href="/case">Info</a>
          </Link>
          <Link>
            <a href="/partner-1">Eng</a>
          </Link>
        </LinkList>
      </Nav>
    </Container>
  );
};

export default Navbar;
