import React from 'react';

import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Navigation from '../../components/ui/Navigation';

const Article = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amazing Article</h1>
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
        <Navigation />
      </main>
    </div>
  );
};

export default Article;
