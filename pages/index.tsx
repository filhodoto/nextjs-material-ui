import Home from 'views/Home';
import { Context } from 'vm';

export interface dummyPropsI {
  authenticated: boolean;
}

const HomePage = (props: dummyPropsI): JSX.Element => <Home {...props} />;

export async function getServerSideProps(
  context: Context
): Promise<{ props: dummyPropsI }> {
  console.log(context);
  return { props: { authenticated: false } };
}
export default HomePage;
