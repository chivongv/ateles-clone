import styled from '@emotion/styled';
import { servicesData } from '@data/home';

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
            <Title>{servicesData.title}</Title>
            <ServiceList>
                {servicesData.services.map((el, i) => {
                    return (
                        <Service key={el.title}>
                            <ServiceTitle>{el.title} ▸</ServiceTitle>
                            <ServiceText>{el.text}</ServiceText>
                            <CheckList>
                                {el.checkList.map((item, j) => {
                                    return (
                                        <li key={item.title}>
                                            <a href={item.url}>{item.title}</a>
                                        </li>
                                    );
                                })}
                            </CheckList>
                        </Service>
                    );
                })}
            </ServiceList>
        </Container>
    );
};

export default Services;
