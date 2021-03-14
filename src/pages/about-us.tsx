import styled from '@emotion/styled';
import SocialMediaNav from '@components/SocialMediaNav';
import Navbar from '@components/Navbar';
import Footer from '@/components/Footer';

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
      <Navbar />
      <Inner>
        <Hero>
          <HeroTitle>We are Ateles</HeroTitle>
          <HeroSubTitle>
            Creating the future of eCommerce and digital transformation.
          </HeroSubTitle>
          <HeroText>
            Ateles is one of the leading independent digital consulting
            companies - based on market-leading standard platforms, we deliver
            innovative and user-friendly solutions to our customers. Since 2001,
            we have developed solutions to customers in both the B2C and B2B
            segments.
          </HeroText>
          <HeroText>
            The way we work with eCommerce is simple - it starts and ends with a
            best-in-class experience strategy that builds brands and drives
            transactions.
          </HeroText>
          <HeroText>
            Today, we are 50 digital experts based in Stockholm, Linköping and
            Oslo. We are big thinkers with a passion for the latest technology
            in eCommerce.
          </HeroText>
        </Hero>
        <HR />
        <section>
          <SectionInner>
            <FormTitle>Contact us</FormTitle>
            <Form>
              <FormControl>
                <label htmlFor="firstName">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="firstName">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </FormControl>
              <FormControl>
                <label htmlFor="firstName">Email</label>
                <Input type="email" name="email" placeholder="Email" />
              </FormControl>
              <FormControl>
                <label htmlFor="email">Email</label>
                <Input type="email" name="email" placeholder="Email" required />
              </FormControl>
              <FormControl>
                <label htmlFor="phone">Phone</label>
                <Input type="tel" name="phone" placeholder="Phone" />
              </FormControl>
              <FormControl>
                <label htmlFor="message">Message</label>
                <Input type="text" name="message" placeholder="Message" />
              </FormControl>
              <Consent>
                <input type="checkbox" />
                By submitting the form I agree that Ateles can save and process
                my information in accordance with the{' '}
                <a href="https://www.ateles.se/privacy-policy/">
                  Privacy Policy
                </a>
                .
              </Consent>
              <Button>Contact me</Button>
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
