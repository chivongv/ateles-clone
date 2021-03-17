import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')({
  padding: '20px 10px',
  marginBottom: '1em',
  lineHeight: 1.6,
});

const LocationCity = styled('p')({
  marginBottom: '1em',
  fontWeight: 600,
  textTransform: 'uppercase',
});

const LocationAdress = styled('div')({
  marginBottom: '1em',
});

const LocationContact = styled('p')({
  marginBottom: '1em',
});

const HoverLink = styled('a')({
  transition: 'color 200ms ease',
  ':hover': {
    color: 'rgba(255,255,255,0.5)',
  },
});

type Props = {
  city: string;
  adress: string;
  telephone: string;
  email: string;
};

function Location(props: Props) {
  return (
    <Container>
      <LocationCity>{props.city}</LocationCity>
      <LocationAdress>
        {props.adress.split(',').map((el, index) => (
          <span key={index}>
            {el}
            <br />
          </span>
        ))}
      </LocationAdress>
      <LocationContact>
        Tel:{' '}
        <HoverLink href={`tel:${props.telephone}`}>{props.telephone}</HoverLink>
        <br />
        Email:{' '}
        <HoverLink href={`mailto:${props.email}`}>{props.email}</HoverLink>
      </LocationContact>
    </Container>
  );
}

export default Location;
