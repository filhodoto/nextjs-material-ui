import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Head from 'next/head';
import Navigation from 'components/ui/Navigation';

const Article = (): JSX.Element => {
  return (
    <Container maxWidth='xl'>
      <Navigation />

      <Grid container component='main' direction='column' alignItems='center'>
        <Head>
          <title>Article</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <h1>Amazing Article</h1>
        <p>
          {' '}
          The path of the righteous man is beset on all sides by the iniquities
          of the selfish and the tyranny of evil men. Blessed is he who, in the
          name of charity and good will, shepherds the weak through the valley
          of darkness, for he is truly his brothers keeper and the finder of
          lost children. And I will strike down upon thee with great vengeance
          and furious anger those who would attempt to poison and destroy My
          brothers. And you will know My name is the Lord when I lay My
          vengeance upon thee.
        </p>
      </Grid>
    </Container>
  );
};

export default Article;
