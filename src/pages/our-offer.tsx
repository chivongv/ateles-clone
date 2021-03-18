import Head from 'next/head';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import styled from '@emotion/styled';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import CaretArrowDown from '@icons/CaretArrowDown';

const Banner = styled('div')({
  minHeight: '100vh',
  background: `url("/assets/andrew-ridley-jR4Zf-riEjI-unsplash.jpg") no-repeat center`,
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  backgroundAttachment: 'fixed',
  marginBottom: 20,
  position: 'relative',
  '::after': {
    content: `""`,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0,0,80,0.35)',
    opacity: 0.6,
    zIndex: 0,
  },
});

const BannerInner = styled('div')({
  height: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  textAlign: 'center',
  color: 'var(--colors-white)',
  lineHeight: 1.6,
  zIndex: 2,
});

const BannerTitle = styled('h1')({
  marginBottom: '1.5rem',
  fontSize: '2.5rem',
});

const BannerText = styled('p')({
  marginBottom: '4rem',
  fontWeight: 600,
  letterSpacing: 1,
});

const BannerServiceList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  paddingBottom: 70,
  justifyContent: 'center',
  gap: 15,
});

const BannerService = styled('div')({
  width: '100%',
  '@media screen and (min-width: 450px)': {
    width: '45%',
  },
  '@media screen and (min-width: 992px)': {
    width: '25%',
  },
});

const BannerLink = styled('a')({
  fontSize: '2rem',
  fontWeight: 600,
  borderBottom: '1px solid var(--colors-light-gray)',
  cursor: 'pointer',
  transition: 'color 200ms ease-in-out, border 200ms ease-in-out',
  ':hover': {
    color: 'var(--colors-light-gray)',
    borderBottom: '1px solid var(--colors-normal-gray)',
  },
});

const BannerServiceText = styled('p')({
  textAlign: 'start',
  letterSpacing: 1,
});

const ArrowWrapper = styled('div')({
  position: 'absolute',
  bottom: 10,
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: 2,
  transition: 'transform 200ms ease-in-out',
  ':hover': {
    transform: 'translate(-50%, 5px)',
  },
  '@media screen and (min-width: 992px)': {
    bottom: 100,
  },
});

const SectionInner = styled('div')({
  maxWidth: 1500,
  margin: '0 auto',
  paddingBottom: '3rem',
  '@media screen and (min-width: 1000px)': {
    paddingTop: '3rem',
  },
});

const ServiceHeader = styled('h2')({
  textAlign: 'center',
  marginBottom: '2rem',
  fontSize: '2rem',
});

const ServiceList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '25px 15px',
  height: '100%',
  '@media screen and (min-width: 992px)': {
    marginBottom: '5rem',
  },
});

const Service = styled('div')({
  width: '100%',
  '@media screen and (min-width: 400px)': {
    width: '45%',
  },
  '@media screen and (min-width: 992px)': {
    width: '25%',
  },
  '> p': {
    marginBottom: 20,
  },
});

const ImageContainerTitle = styled('span')({
  fontWeight: 600,
});

const ImageContainerLink = styled('a')({
  width: '100%',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  position: 'relative',
});

const ImageContainer = styled('div')<{ imgUrl: string }>(({ imgUrl }) => ({
  background: `url("${imgUrl}") no-repeat center`,
  backgroundSize: 'cover',
  width: '100%',
  minHeight: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  marginBottom: 30,
  position: 'relative',
  height: '100%',
  '::after': {
    content: `""`,
    width: '100%',
    height: '100%',
    background: 'hsl(0, 0%, 20%, 0.35)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  '> *': {
    zIndex: 2,
  },
}));

const ReadMore = styled('a')({
  color: 'var(--colors-orange)',
  ':hover': {
    color: 'var(--colors-light-orange)',
  },
});

type BannerService = {
  title: string;
  url: string;
  text: string;
};

type Service = {
  title: string;
  url: string;
  imgUrl: string;
  content: string;
  readMoreText: string;
};

type ServicesData = {
  id: string;
  title: string;
  services: Service[];
};

const OurOffer = () => {
  const { t } = useTranslation();
  const content: string[] =
    t('our-offer:bannerData.content', {}, { returnObjects: true }) || [];
  const bannerServices: BannerService[] =
    t('our-offer:bannerData.services', {}, { returnObjects: true }) || [];
  const servicesData: ServicesData[] =
    t('our-offer:servicesData', {}, { returnObjects: true }) || [];

  return (
    <div>
      <Head>
        <title>Our offer | Ateles</title>
      </Head>
      <Navbar />
      <Banner>
        <BannerInner>
          <BannerTitle>{t('our-offer:bannerData.title')}</BannerTitle>
          {content.map((text, index) => (
            <BannerText key={index}>{text}</BannerText>
          ))}
          <BannerServiceList>
            {bannerServices.map((el) => {
              return (
                <BannerService key={el.title}>
                  <Link href={el.url}>
                    <BannerLink>{el.title}</BannerLink>
                  </Link>
                  <BannerServiceText>{el.text}</BannerServiceText>
                </BannerService>
              );
            })}
          </BannerServiceList>
        </BannerInner>
        <ArrowWrapper>
          <Link href="#ecom-tech">
            <a>
              <CaretArrowDown height="40" width="40" />
            </a>
          </Link>
        </ArrowWrapper>
      </Banner>
      <section>
        <SectionInner>
          {servicesData.map((el) => {
            return (
              <div key={el.id}>
                <ServiceHeader id={el.id}>{el.title}</ServiceHeader>
                <ServiceList>
                  {el.services.map((it) => (
                    <Service key={it.title}>
                      <ImageContainerLink href={it.url}>
                        <ImageContainer imgUrl={it.imgUrl}>
                          <ImageContainerTitle>{it.title}</ImageContainerTitle>
                        </ImageContainer>
                      </ImageContainerLink>
                      <p>{it.content}</p>
                      <ReadMore href={it.url}>{it.readMoreText}</ReadMore>
                    </Service>
                  ))}
                </ServiceList>
              </div>
            );
          })}
        </SectionInner>
      </section>
      <Footer />
    </div>
  );
};

export default OurOffer;
