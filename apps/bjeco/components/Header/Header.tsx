import { Heading } from 'ariakit/heading';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles['_']}>
      <Heading>bjeco</Heading>
    </header>
  );
};

export default Header;
