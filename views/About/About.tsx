import React from 'react';

import { Container, Grid } from '@material-ui/core';
import Head from 'next/head';
import Navigation from 'components/ui/Navigation';

const About = (): JSX.Element => {
  return (
    <Container maxWidth='xl'>
      <Navigation />
      <Grid container component='main' direction='column' alignItems='center'>
        <Head>
          <title>About</title>
        </Head>

        <h1>About page</h1>
        <p> Im sure will have some good information about something here.</p>
      </Grid>
    </Container>
  );
};
export default About;
