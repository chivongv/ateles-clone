import { locationData } from '@data/footer';
import styled from '@emotion/styled';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Location from './Location';

const Container = styled('footer')({
  background: 'var(--colors-footer-bg)',
  color: '#fff',
  paddingTop: 30,
  paddingBottom: 50,
  display: 'flex',
  flexDirection: 'column',
});

const Inner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
});

const Wrapper = styled('div')({
  padding: '10px 20px',
  overflow: 'hidden',
  img: {
    maxWidth: '100%',
  },
});

const LocationWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '100vw',
  margin: '0 auto',
  textAlign: 'center',
  '@media screen and (min-width: 600px)': {
    gridTemplateColumns: 'repeat(auto-fill, 50%)',
  },
  '@media screen and (min-width: 900px)': {
    gridTemplateColumns: 'repeat(auto-fill, 33%)',
  },
});

const HoverLink = styled('a')({
  transition: 'color 200ms ease',
  ':hover': {
    color: 'rgba(255,255,255,0.5)',
  },
});

const List = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: 30,
  fontSize: '0.75rem',
  li: {
    ':last-child': {
      marginLeft: 10,
    },
  },
});

const ListLink = styled('a')({
  textTransform: 'uppercase',
  transition: 'color 200ms ease',
  ':hover': {
    color: 'var(--colors-light-gray)',
  },
});

const SocialMediaFooter = styled('ul')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '10px 20px',
  listStyle: 'none',
  li: {
    marginRight: 15,
    svg: {
      width: 30,
      height: 30,
    },
    ':last-child': {
      marginRight: 0,
    },
    ':hover': {
      color: '#fff',
    },
  },
  ':hover': {
    color: 'var(--colors-normal-gray)',
  },
});

const Footer = () => {
  return (
    <Container>
      <Inner>
        <Wrapper>
          <img src="/weareateles-footer.png" />
        </Wrapper>
        <p style={{ padding: '10px 20px', fontWeight: 'bold' }}>
          New business:{' '}
          <HoverLink href="mailto:hello@ateles.se">hello@ateles.se</HoverLink>
        </p>
        <LocationWrapper>
          {locationData.map((el, index) => {
            return (
              <Location
                key={index}
                city={el.city}
                adress={el.adress}
                telephone={el.telephone}
                email={el.email}
              />
            );
          })}
        </LocationWrapper>
        <List>
          <li>
            <ListLink href="/contact">Contact | </ListLink>
          </li>
          <li>
            <ListLink href="/personal-data-and-cookie-policy">
              Personal data and cookie policy
            </ListLink>
          </li>
        </List>
        <SocialMediaFooter>
          <li>
            <a href="https://www.linkedin.com/company/ateles-consulting/">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/AtelesConsulting/">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/weareateles/">
              <FaInstagram />
            </a>
          </li>
        </SocialMediaFooter>
      </Inner>
    </Container>
  );
};

export default Footer;
