import styled from '@emotion/styled';
import {
  personalData,
  cookieData,
} from '@data/personal-data-and-cookie-policy';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Container = styled('div')({});

const Inner = styled('div')({
  maxWidth: 1100,
  margin: '0 auto 4rem',
});

const Title = styled('h2')({
  fontSize: '2rem',
  marginTop: '3.5rem',
  marginBottom: '2rem',
});

const SubTitle = styled('h3')({
  marginTop: '2rem',
  marginBottom: '1.5rem',
});

const Text = styled('p')({
  marginBottom: '1rem',
  lineHeight: 1.6,
});

const PrivacyPolicy = () => {
  return (
    <Container>
      <Navbar />
      <Inner>
        <Title>{personalData.title}</Title>
        {personalData.content.map((text) => (
          <Text>{text}</Text>
        ))}
        {personalData.sections.map((el) => (
          <div>
            <SubTitle>{el.title}</SubTitle>
            {el.content.map((text: string) => (
              <Text>{text}</Text>
            ))}
          </div>
        ))}
        <Title>{cookieData.title}</Title>
        {cookieData.content.map((text) => (
          <Text>{text}</Text>
        ))}
        {cookieData.sections.map((el) => (
          <div>
            <SubTitle>{el.title}</SubTitle>
            {el.content.map((text: string) => (
              <Text>{text}</Text>
            ))}
          </div>
        ))}
      </Inner>
      <Footer />
    </Container>
  );
};

export default PrivacyPolicy;
