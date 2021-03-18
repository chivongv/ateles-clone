import Head from 'next/head';
import styled from '@emotion/styled';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Location from '@components/Location';
import { contactData } from '@data/contact';

const Inner = styled('div')({
  maxWidth: 1000,
  margin: '0px auto 20px',
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

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact | Ateles</title>
      </Head>
      <Navbar />
      <Inner>
        <h1>{contactData.title}</h1>
        <div>
          <FormTitle>{contactData.form.title}</FormTitle>
          <p>{contactData.form.text}</p>
          <Form>
            <FormControl>
              <label htmlFor="firstName">{contactData.form.firstName}</label>
              <Input
                type="text"
                name="firstName"
                placeholder={contactData.form.firstName}
                required
              />
            </FormControl>
            <FormControl>
              <label htmlFor="lastName">{contactData.form.firstName}</label>
              <Input
                type="text"
                name="lastName"
                placeholder={contactData.form.firstName}
                required
              />
            </FormControl>
            <FormControl>
              <label htmlFor="email">{contactData.form.email}</label>
              <Input
                type="email"
                name="email"
                placeholder={contactData.form.email}
                required
              />
            </FormControl>
            <FormControl>
              <label htmlFor="phoneNumber">
                {contactData.form.phoneNumber}
              </label>
              <Input
                type="tel"
                name="phoneNumber"
                placeholder={contactData.form.phoneNumber}
              />
            </FormControl>
            <FormControl>
              <label htmlFor="message">{contactData.form.message}</label>
              <Input
                type="text"
                name="message"
                placeholder={contactData.form.message}
              />
            </FormControl>
            <Consent>
              <input type="checkbox" />
              {contactData.form.consentText}
              <a href={contactData.form.consentLinkUrl}>
                {contactData.form.consentLinkText}
              </a>
              .
            </Consent>
            <Button>{contactData.form.buttonText}</Button>
          </Form>
        </div>
        <div>
          <h2>{contactData.office.title}</h2>
          {contactData.office.content.map((el) => (
            <Location
              key={el.adress}
              city={el.city}
              adress={el.adress}
              email={el.email}
              telephone={el.telephone}
            />
          ))}
        </div>
      </Inner>
      <Footer />
    </div>
  );
};

export default Contact;
