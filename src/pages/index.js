import Head from 'next/head';
import Logo from '../components/Logo';
import Main from '../components/Main';

const splashStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: 'calc(10px + 2vmin)',
  justifyContent: 'center',
};

const Home = () => {
  return (
    <Main style={splashStyles}>
      <Head>
        <title>bje</title>
      </Head>

      <Logo />
    </Main>
  );
};

export default Home;
