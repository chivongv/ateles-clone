import Link from 'next/link';
import styled from '@emotion/styled';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaretArrowDown from '@/icons/CaretArrowDown';
import {
  bannerData,
  ecomTechData,
  growthData,
  creativeData,
} from '../data/our-offer';

const Banner = styled('div')({
  height: '100vh',
  background:
    'url("/assets/andrew-ridley-jR4Zf-riEjI-unsplash.jpg") no-repeat center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  '::after': {
    content: '""',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'rgba(0,0,80,0.35)',
    opacity: 0.6,
    zIndex: 0,
  },
});

const BannerInner = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  textAlign: 'center',
  color: '#fff',
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

const BannerLink = styled('a')({
  fontSize: '2rem',
  borderBottom: '1px solid #fff',
  cursor: 'pointer',
});

const BannerServiceText = styled('p')({
  textAlign: 'start',
  letterSpacing: 1,
});

const ArrowWrapper = styled('div')({
  position: 'absolute',
  bottom: 100,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 2,
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
  gap: 15,
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
    content: '""',
    width: '100%',
    height: '100%',
    background: '#333',
    opacity: 0.3,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  '> *': {
    zIndex: 5,
  },
}));

const ReadMore = styled('a')({
  color: 'var(--colors-orange)',
});

const OurOffer = () => {
  return (
    <div>
      <Navbar />
      <Banner>
        <BannerInner>
          <BannerTitle>{bannerData.title}</BannerTitle>
          <BannerText>{bannerData.text}</BannerText>
          <div style={{ display: 'flex' }}>
            {bannerData.services.map((el) => {
              return (
                <div>
                  <Link href={el.url}>
                    <BannerLink>{el.title}</BannerLink>
                  </Link>
                  <BannerServiceText>{el.text}</BannerServiceText>
                </div>
              );
            })}
          </div>
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
          <ServiceHeader id="ecom-tech">eCom Tech</ServiceHeader>
          <ServiceList>
            {ecomTechData.map((el) => {
              return (
                <Service key={el.title}>
                  <ImageContainerLink href={el.url}>
                    <ImageContainer imgUrl={el.imgUrl}>
                      <span>{el.title}</span>
                    </ImageContainer>
                  </ImageContainerLink>
                  <p>{el.content}</p>
                  <ReadMore href={el.url}>
                    Read more about {el.readMoreText}
                  </ReadMore>
                </Service>
              );
            })}
          </ServiceList>
          <ServiceHeader id="growth">Growth</ServiceHeader>
          <ServiceList>
            {growthData.map((el) => {
              return (
                <Service key={el.title}>
                  <ImageContainerLink href={el.url}>
                    <ImageContainer imgUrl={el.imgUrl}>
                      <span>{el.title}</span>
                    </ImageContainer>
                  </ImageContainerLink>
                  <p>{el.content}</p>
                  <ReadMore href={el.url}>
                    Read more about {el.readMoreText}
                  </ReadMore>
                </Service>
              );
            })}
          </ServiceList>
          <ServiceHeader id="creative">Creative</ServiceHeader>
          <ServiceList>
            {creativeData.map((el) => {
              return (
                <Service key={el.title}>
                  <ImageContainerLink href={el.url}>
                    <ImageContainer imgUrl={el.imgUrl}>
                      <span>{el.title}</span>
                    </ImageContainer>
                  </ImageContainerLink>
                  <p>{el.content}</p>
                  <ReadMore href={el.url}>
                    Read more about {el.readMoreText}
                  </ReadMore>
                </Service>
              );
            })}
          </ServiceList>
        </SectionInner>
      </section>
      <Footer />
    </div>
  );
};

export default OurOffer;
