import Link from 'next/link';

const Navigation = (): JSX.Element => {
  return (
    <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href='/articles/amazing'>
          <a>Article</a>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
