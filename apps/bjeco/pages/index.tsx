import { Logo } from '../components';
import styles from './Landing.module.scss';

const Home = (): JSX.Element => {
  return (
    <div className={styles['_']}>
      <Logo />
    </div>
  );
};

export default Home;
