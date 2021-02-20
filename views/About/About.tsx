import React from 'react';

import Head from 'next/head';
import { Grid } from '@material-ui/core';

const About = (): JSX.Element => {
  return (
    <Grid container component='main' direction='column' alignItems='center'>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>About page</h1>
      <p> Im sure will have some good information about something here.</p>
    </Grid>
  );
};
export default About;
