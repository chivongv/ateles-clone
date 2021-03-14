import styled from '@emotion/styled';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Container = styled('footer')({
  background: '#000033',
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

const Location = styled('div')({
  padding: '20px 10px',
  marginBottom: '1em',
  lineHeight: 1.6,
});

const LocationCity = styled('p')({
  marginBottom: '1em',
  fontWeight: 600,
});

const LocationAdress = styled('div')({
  marginBottom: '1em',
});

const LocationContact = styled('p')({
  marginBottom: '1em',
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
    color: 'rgba(255,255,255,0.5)',
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
    color: 'rgba(255,255,255,0.4)',
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
          <Location>
            <LocationCity>STOCKHOLM</LocationCity>
            <LocationAdress>
              Ateles Consulting
              <br />
              Kungsbroplan 3A
              <br />
              112 27 Stockholm
            </LocationAdress>
            <LocationContact>
              Tel:{' '}
              <HoverLink href="tel:+46 8 750 70 20">+46 8 750 70 20</HoverLink>
              <br />
              Email:{' '}
              <HoverLink href="mailto:hello@ateles.se">
                hello@ateles.se
              </HoverLink>
            </LocationContact>
          </Location>
          <Location>
            <LocationCity>LINKÖPING</LocationCity>
            <LocationAdress>
              Ateles Consulting
              <br />
              Teknikringen 6<br />
              583 30 Linköping
            </LocationAdress>
            <LocationContact>
              Tel:{' '}
              <HoverLink href="tel:+46 13 21 10 20">+46 13 21 10 20</HoverLink>
              <br />
              Email:{' '}
              <HoverLink href="mailto:hello@ateles.se">
                hello@ateles.se
              </HoverLink>
            </LocationContact>
          </Location>
          <Location>
            <LocationCity>OSLO</LocationCity>
            <LocationAdress>
              Ateles Consulting
              <br />
              Thunes vei 2<br />
              0274 Oslo
            </LocationAdress>
            <LocationContact>
              Tel: <HoverLink href="tel:+47 21544643">+47 21544643</HoverLink>
              <br />
              Email:{' '}
              <HoverLink href="mailto:hello@ateles.no">
                hello@ateles.no
              </HoverLink>
            </LocationContact>
          </Location>
        </LocationWrapper>
        <List>
          <li>
            <ListLink href="https://www.atelesconsulting.com/contact">
              Contact |{' '}
            </ListLink>
          </li>
          <li>
            <ListLink href="https://www.atelesconsulting.com/personal-data-and-cookie-policy">
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
