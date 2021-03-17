import Head from 'next/head';
import styled from '@emotion/styled';
import SocialMediaNav from '@components/SocialMediaNav';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import { aboutUsData } from '@data/about-us';

const Inner = styled('div')({
  maxWidth: 1000,
  margin: '0px auto 20px',
});

const SectionInner = styled('div')({});

const Hero = styled('section')({
  marginBottom: '3rem',
  textAlign: 'center',
  paddingTop: '6rem',
});

const HeroTitle = styled('h1')({
  fontSize: '2.5rem',
  marginBottom: '2rem',
});

const HeroSubTitle = styled('h2')({
  fontSize: '2rem',
  marginBottom: '2rem',
});

const HeroText = styled('p')({
  maxWidth: 900,
  margin: '0 auto 1rem',
});

const HR = styled('hr')({
  color: 'var(--colors-orange)',
});

const FormTitle = styled('h2')({
  marginBottom: '2rem',
  marginTop: '3rem',
  margin: '3rem auto 2rem',
});

const Form = styled('form')({
  marginBottom: '2rem',
});

const FormControl = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1.5rem',
});

const Input = styled('input')({
  padding: '5px 10px',
  background: '#f5f8fa',
  border: 'none',
  height: 40,
});

const Consent = styled('div')({
  margin: '2rem 0',
  '> input': {
    marginRight: 10,
  },
  '> a': {
    color: 'blue',
    textDecoration: 'underline',
  },
});

const Button = styled('button')({
  border: 'none',
  background: 'rgb(0, 0, 51)',
  color: 'var(--colors-white)',
  padding: '10px 25px',
  borderRadius: 3,
  cursor: 'pointer',
});

const AboutUs = () => {
  return (
    <div>
      <Head>
        <title>About us | Ateles</title>
      </Head>
      <Navbar />
      <Inner>
        <Hero>
          <HeroTitle>{aboutUsData.title}</HeroTitle>
          <HeroSubTitle>{aboutUsData.subTitle}</HeroSubTitle>
          {aboutUsData.content.map((text) => (
            <HeroText>{text}</HeroText>
          ))}
        </Hero>
        <HR />
        <section>
          <SectionInner>
            <FormTitle>{aboutUsData.form.title}</FormTitle>
            <Form>
              <FormControl>
                <label htmlFor="firstName">{aboutUsData.form.firstName}</label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder={aboutUsData.form.firstName}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="lastName">{aboutUsData.form.lastName}</label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder={aboutUsData.form.lastName}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="email">{aboutUsData.form.email}</label>
                <Input
                  type="email"
                  name="email"
                  placeholder={aboutUsData.form.email}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="phoneNumber">
                  {aboutUsData.form.phoneNumber}
                </label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder={aboutUsData.form.phoneNumber}
                />
              </FormControl>
              <FormControl>
                <label htmlFor="message">{aboutUsData.form.message}</label>
                <Input
                  type="text"
                  name="message"
                  placeholder={aboutUsData.form.message}
                />
              </FormControl>
              <Consent>
                <input type="checkbox" />
                {aboutUsData.form.consentText}
                <a href={aboutUsData.form.consentLinkUrl}>
                  {aboutUsData.form.consentLinkText}
                </a>
                .
              </Consent>
              <Button>{aboutUsData.form.buttonText}</Button>
            </Form>
            <SocialMediaNav />
          </SectionInner>
        </section>
      </Inner>
      <Footer />
    </div>
  );
};

export default AboutUs;
