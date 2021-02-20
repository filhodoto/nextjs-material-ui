import { Grid } from '@material-ui/core';
import Head from 'next/head';
import theme from '../styles/utils/theme';

const Home = (): JSX.Element => {
  return (
    <Grid container component='main' direction='column' alignItems='center'>
      <Head>
        <title>Homepage</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content={theme.palette.primary.main} />
      </Head>
      <h1>Homepage</h1>
    </Grid>
  );
};

export default Home;
