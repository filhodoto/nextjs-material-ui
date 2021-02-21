import { Container, Grid } from '@material-ui/core';
import Head from 'next/head';
import Navigation from 'components/ui/Navigation';

const Home = (): JSX.Element => {
  return (
    <Container maxWidth='xl'>
      <Head>
        <title>Home</title>
      </Head>
      <Navigation />
      <Grid container component='main' direction='column' alignItems='center'>
        <h1>Home</h1>
        <p> Im sure will have some good information about something here.</p>
      </Grid>
    </Container>
  );
};

export default Home;
