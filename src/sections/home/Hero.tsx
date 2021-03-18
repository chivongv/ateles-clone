import styled from '@emotion/styled';
import Link from 'next/link';
import CaretArrowDown from '@icons/CaretArrowDown';
import useTranslation from 'next-translate/useTranslation';

const Container = styled('section')({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 0,
});

const IframeWrapper = styled('div')({
    flex: 2,
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: 25,
    height: 0,
    zIndex: -1,
    overflow: 'hidden',
    background: 'black',
    ['iframe, object, embed']: {
        position: 'absolute',
        left: 0,
        top: '-5%',
        width: '100%',
        height: '100%',
        '@media screen and (max-width: 640px)': {
            display: 'none',
        },
    },
    '::after': {
        content: '""',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '-5%',
        left: 0,
        background: 'hsl(0, 0%, 20%, 0.25)',
        zIndex: 0,
    },
});

const Center = styled('div')({
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    '@media screen and (min-width: 992px)': {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
});

const Title = styled('h1')({
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10,
    maxWidth: 1200,
    '@media screen and (min-width: 1000px)': {
        fontSize: '3rem',
        marginBottom: 50,
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
    bottom: 170,
    left: '50%',
    transition: 'transform 200ms ease-in-out',
    transform: 'translate(-50%, 0)',
    ':hover': {
        transform: 'translate(-50%, 5px)',
    },
    '@media screen and (min-width: 1000px)': {
        bottom: 140,
    },
});

const Hero = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <IframeWrapper>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/pKAO6F29bhg?rel=0&autoplay=1&loop=1&mute=1&controls=0&playlist=pKAO6F29bhg"
                    frameBorder="0"
                    allowFullScreen
                />
            </IframeWrapper>
            <Center>
                <Title>{t('home:hero.title')}</Title>
                {t('home:hero.buttonText') && (
                    <ButtonWrapper>
                        <ButtonLink href={t('home:hero.buttonUrl')}>
                            {t('home:hero.buttonText')}
                        </ButtonLink>
                    </ButtonWrapper>
                )}
            </Center>
            <ArrowWrapper>
                <Link href={t('home:hero.readMoreUrl')}>
                    <a>
                        <CaretArrowDown height="40" width="40" />
                    </a>
                </Link>
            </ArrowWrapper>
        </Container>
    );
};

export default Hero;
