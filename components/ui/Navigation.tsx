import React from 'react';
import { Box, Button } from '@material-ui/core';
import Link from 'next/link';

interface DummyLink {
  label: string;
  link: string;
}

const dummyLinks: DummyLink[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Article', link: '/articles/amazing' },
];

const Navigation = (): JSX.Element => {
  return (
    <Box component='div' m={1}>
      {dummyLinks.map(({ label, link }) => {
        console.log(label);
        return (
          <Link key={label} href={link} passHref>
            <Button variant='contained' color='primary'>
              {label}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};

export default React.memo(Navigation);
