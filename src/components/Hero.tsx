import styled from '@emotion/styled';
import Link from 'next/link';
import CaretArrowDown from '../icons/CaretArrowDown';

const Container = styled('section')({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const IframeWrapper = styled('div')({
  flex: 2,
  position: 'relative',
  paddingBottom: '56.25%',
  paddingTop: 25,
  height: 0,
  zIndex: -1,
  overflow: 'hidden',
  ['iframe, object, embed']: {
    position: 'absolute',
    left: 0,
    top: '-5%',
    width: '100%',
    height: '100%',
    ['.html5-endscreen, .ytp-player-content, .videowall-endscreen, .ytp-show-tiles']: {
      display: 'none !important',
    },
  },
});

const Center = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Title = styled('h1')({
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 10,
  marginBottom: 50,
  maxWidth: 1200,
  '@media screen and (min-width: 1000px)': {
    fontSize: '3rem',
  },
});

const ButtonWrapper = styled('div')({
  margin: '10px auto',
  padding: 10,
});

const ButtonLink = styled('a')({
  padding: '20px 30px',
  border: '2px solid #fff',
  textTransform: 'uppercase',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 400,
  borderRadius: 3,
  lineHeight: 1.6,
  ':hover': {
    background: '#fff',
    color: '#000',
  },
});

const ArrowWrapper = styled('div')({
  position: 'absolute',
  bottom: 100,
  left: '50%',
  transform: 'translateX(-50%)',
});

const Hero = () => {
  return (
    <Container>
      <IframeWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/pKAO6F29bhg?rel=0&autoplay=1&mute=1&controls=0&?playlist=pKAO6F29bhg&loop=1"
          frameBorder="0"
          allowFullScreen
        />
      </IframeWrapper>
      <Center>
        <Title>
          [ Creating the future of eCommerce and digital transformation ]
        </Title>
        <ButtonWrapper>
          <ButtonLink href="/our-offer">What we do</ButtonLink>
        </ButtonWrapper>
      </Center>
      <ArrowWrapper>
        <Link href="#section-services">
          <a>
            <CaretArrowDown height="40" width="40" />
          </a>
        </Link>
      </ArrowWrapper>
    </Container>
  );
};

export default Hero;
