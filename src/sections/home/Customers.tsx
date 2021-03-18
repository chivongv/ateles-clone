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
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    justifyItems: 'center',
    alignItems: 'center',
    gap: 30,
});

const ListItem = styled('li')({
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    '@media screen and (min-width: 368px)': {
        maxWidth: 200,
        maxHeight: 240,
        img: {
            minWidth: 150,
            maxWidth: 200,
        },
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
