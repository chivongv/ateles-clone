import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';

const Container = styled('section')({
    padding: '50px 20px 40px',
    maxWidth: 1200,
    margin: '20px auto',
});

const Title = styled('h2')({
    textAlign: 'center',
    marginBottom: '3rem',
});

const List = styled('ul')({
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 10,
    '@media screen and (min-width: 640px)': {
        gap: 30,
    },
});

const ListItem = styled('li')({
    width: '100%',
    margin: 'auto',
    img: {
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',
    },
});

const Customers = () => {
    const { t } = useTranslation();
    const customers: string[] =
        t('home:customersData.logoData', {}, { returnObjects: true }) || [];

    return (
        <Container>
            <Title>{t('home:customersData.title')}</Title>
            <List>
                {customers.map((url, index) => {
                    return (
                        <ListItem key={index}>
                            <img src={url} />
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};

export default Customers;
