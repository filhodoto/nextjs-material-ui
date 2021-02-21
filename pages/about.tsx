import About from 'views/About/About';
import { Context } from 'vm';
export interface dummyPropsI {
  authenticated: boolean;
}

const AboutPage = (props: dummyPropsI): JSX.Element => <About {...props} />;

export async function getServerSideProps(
  context: Context
): Promise<{ props: dummyPropsI }> {
  return { props: { authenticated: true } };
}

export default AboutPage;
