import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import Template from 'templates/IndexTemplate';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Template />
    </div>
  );
};

export default Home;
