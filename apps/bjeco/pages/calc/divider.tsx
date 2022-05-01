import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';

const Divider = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Divider</title>
      </Head>

      <Header />
      <Main>Divider</Main>
    </>
  );
};

export default Divider;
