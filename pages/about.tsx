import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navigation from '../components/ui/Navigation';

const About = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About page</h1>
        <p> Im sure will have some good information about something here.</p>
        <Navigation />
      </main>
    </div>
  );
};
export default About;
