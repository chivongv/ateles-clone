import styled from '@emotion/styled';

const Container = styled('section')({
  padding: '50px 30px 20px',
  margin: '0 auto',
  maxWidth: 1200,
  zIndex: 3,
  '@media screen and (min-width: 1000px)': {
    padding: '50px 30px',
    margin: '0 auto',
  },
  '@media screen and (min-width: 1800px)': {
    padding: '150px 30px',
    margin: '100px auto 0',
  },
});

const Title = styled('h2')({
  textAlign: 'center',
  padding: 20,
  margin: '0 auto 1rem',
  '@media screen and (min-width: 1000px)': {
    paddingTop: 50,
    margin: '3rem auto 4rem',
  },
});

const ServiceList = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  marginBottom: '2rem',
});

const Service = styled('div')({
  flex: '100%',
  '@media screen and (min-width: 500px)': {
    flex: '45%',
  },
  '@media screen and (min-width: 800px)': {
    flex: '33%',
  },
});

const ServiceTitle = styled('h3')({
  marginTop: 20,
  marginBottom: 20,
  textAlign: 'center',
});

const ServiceText = styled('p')({
  margin: '20px 0',
});

const CheckList = styled('ul')({
  marginTop: 10,
  marginLeft: '1rem',
  color: 'var(--colors-orange)',
  listStyle: 'none',
  li: {
    margin: '20px 0',
    a: {
      textDecoration: 'underline',
    },
    ':hover': {
      color: 'var(--colors-light-orange)',
    },
  },
  'li::before': {
    content: '"✔"',
    marginRight: '0.5em',
  },
});

const Services = () => {
  return (
    <Container id="section-services">
      <Title>This is what we do best</Title>
      <ServiceList>
        <Service>
          <ServiceTitle>eCom tech ▸</ServiceTitle>
          <ServiceText>
            Based on market-leading standard platforms, we build a future-proof
            digital commerce solution adapted to your needs. We carry out smart
            integrations and give you all prerequisites to conducting a
            successfull digital business.
          </ServiceText>
          <CheckList>
            <li>
              <a href="https://www.atelesconsulting.com/omnichannel-unified-commerce">
                Unified Commerce / Omnichannel
              </a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/pim">PIM</a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/cms">CMS</a>
            </li>
          </CheckList>
        </Service>
        <Service>
          <ServiceTitle>Growth ▸</ServiceTitle>
          <ServiceText>
            Traffic is the blood of all digital activities. Conversion is how
            your business becomes profitable. We help you to be visible, found
            and chosen by your target audience, and we do everything necessary
            to transform your visitors into customers.
          </ServiceText>
          <CheckList>
            <li>
              <a href="https://www.atelesconsulting.com/seo">SEO</a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/sem">SEM</a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/cro">CRO</a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/data-science">
                Data Science /AI
              </a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/influencer-marketing">
                Influencer marketing
              </a>
            </li>
          </CheckList>
        </Service>
        <Service>
          <ServiceTitle>Creative ▸</ServiceTitle>
          <ServiceText>
            From strategy to implementation we work to make your brand’s
            identity clear and strong. We develop strategies and ideas for your
            brand. We create content that can build modern digital brands with
            clear messages delivered in new and unexpected ways.
          </ServiceText>
          <CheckList>
            <li>
              <a href="https://www.atelesconsulting.com/ux-graphic-design">
                UX & graphic design
              </a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/branding">Branding</a>
            </li>
            <li>
              <a href="https://www.atelesconsulting.com/content-creation">
                Content creation
              </a>
            </li>
          </CheckList>
        </Service>
      </ServiceList>
    </Container>
  );
};

export default Services;
