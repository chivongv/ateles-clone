import Head from 'next/head';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';
import SocialMediaNav from '@components/SocialMediaNav';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

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
  const { t } = useTranslation();
  const content: { text: string }[] =
    t('about-us:content', {}, { returnObjects: true }) || [];

  return (
    <div>
      <Head>
        <title>About us | Ateles</title>
      </Head>
      <Navbar />
      <Inner>
        <Hero>
          <HeroTitle>{t('about-us:title')}</HeroTitle>
          <HeroSubTitle>{t('about-us:subTitle')}</HeroSubTitle>
          {content.map((text, index) => (
            <HeroText key={index}>{text}</HeroText>
          ))}
        </Hero>
        <HR />
        <section>
          <SectionInner>
            <FormTitle>{t('about-us:form.title')}</FormTitle>
            <Form>
              <FormControl>
                <label htmlFor="firstName">
                  {t('about-us:form.firstName')}
                </label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder={t('about-us:form.firstName')}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="lastName">{t('about-us:form.lastName')}</label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder={t('about-us:form.lastName')}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="email">{t('about-us:form.email')}</label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('about-us:form.email')}
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="phoneNumber">
                  {t('about-us:form.phoneNumber')}
                </label>
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder={t('about-us:form.phoneNumber')}
                />
              </FormControl>
              <FormControl>
                <label htmlFor="message">{t('about-us:form.message')}</label>
                <Input
                  type="text"
                  name="message"
                  placeholder={t('about-us:form.message')}
                />
              </FormControl>
              <Consent>
                <input type="checkbox" />
                {t('about-us:form.consentText')}
                <a href={t('about-us:form.consentLinkUrl')}>
                  {t('about-us:form.consentLinkText')}
                </a>
                .
              </Consent>
              <Button>{t('about-us:form.buttonText')}</Button>
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
