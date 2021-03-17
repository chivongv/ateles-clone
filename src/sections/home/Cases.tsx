import styled from '@emotion/styled';

const Container = styled('section')({});

const Inner = styled('div')({
  background: 'url("/assets/Ateles-DanielWellington.jpg") no-repeat center',
  backgroundSize: 'cover',
  minHeight: 500,
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  '::after': {
    content: '""',
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
});

const Title = styled('h2')({
  fontSize: '3.5rem',
  color: '#fff',
  marginBottom: '3rem',
  textAlign: 'center',
  zIndex: 2,
});

const ButtonWrapper = styled('div')({
  position: 'relative',
  zIndex: 2,
  '::after': {
    content: '""',
    width: '100%',
  },
});

const ButtonLink = styled('a')({
  border: '2px solid rgba(255,255,255,0.9)',
  padding: '25px 40px',
  color: 'rgba(255,255,255,0.9)',
  textTransform: 'uppercase',
  fontSize: '0.875rem',
  fontWeight: 600,
  letterSpacing: 5,
  zIndex: 2,
  ':hover': {
    border: '2px solid rgba(255,255,255,0.7)',
    color: 'rgba(255,255,255,0.7)',
  },
});

const Cases = () => {
  return (
    <Container>
      <Inner>
        <Title>Client Cases</Title>
        <ButtonWrapper>
          <ButtonLink href="https://www.atelesconsulting.com/case">
            See all cases
          </ButtonLink>
        </ButtonWrapper>
      </Inner>
    </Container>
  );
};

export default Cases;
