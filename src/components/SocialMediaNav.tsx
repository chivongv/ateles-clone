import styled from '@emotion/styled';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
});

const Nav = styled('nav')({
  ':hover': {
    color: 'rgba(0,0,0,0.3)',
  },
});

const SocialMediaLink = styled('a')({
  marginRight: 10,
  ':last-child': {
    marginRight: 0,
  },
  ':hover': {
    color: 'var(--colors-text)',
  },
});

const SocialMediaNav = () => {
  return (
    <Container>
      <Nav>
        <SocialMediaLink
          href="https://www.linkedin.com/company/ateles-consulting/"
          target="_blank"
        >
          <FaLinkedinIn />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.facebook.com/AtelesConsulting/"
          target="_blank"
        >
          <FaFacebookF />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://www.instagram.com/weareateles/"
          target="_blank"
        >
          <FaInstagram />
        </SocialMediaLink>
      </Nav>
    </Container>
  );
};

export default SocialMediaNav;
