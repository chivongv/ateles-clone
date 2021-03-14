import styled from '@emotion/styled';

const Container = styled('section')({
  background: 'url("/assets/Ateles-DanielWellington.jpg") no-repeat center',
  minHeight: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '::before': {
    content: '""',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.1)',
  },
});

const Title = styled('h2')({
  fontSize: '3.5rem',
  color: '#fff',
  marginBottom: '3rem',
  textAlign: 'center',
});

const ButtonLink = styled('a')({
  border: '2px solid white',
  padding: '30px 50px',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: 5,
});

const Cases = () => {
  return (
    <Container>
      <Title>Client Cases</Title>
      <div>
        <ButtonLink href="https://www.atelesconsulting.com/case">
          See all cases
        </ButtonLink>
      </div>
    </Container>
  );
};

export default Cases;
