import styled from '@emotion/styled';

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
  const customersLogo = [
    '/assets/gant.png',
    '/assets/gina_tricot.png',
    '/assets/eton.png',
    '/assets/moller_mobility_group.png',
    '/assets/toyota.png',
    '/assets/audi.png',
    '/assets/seat.png',
    '/assets/dogman.png',
    '/assets/melbye.png',
    '/assets/pdf_brasserie_group.png',
    '/assets/kinto_share.png',
    '/assets/boots.png',
    '/assets/dackskiftarna.jpg',
    '/assets/fkra.jpg',
    '/assets/maxbo.png',
    '/assets/boots.png',
    '/assets/boots.png',
  ];

  return (
    <Container>
      <Title>A selection of our customers</Title>
      <List>
        {customersLogo.map((url, index) => {
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
