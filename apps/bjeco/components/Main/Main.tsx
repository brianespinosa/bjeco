import { Section } from '@bjeco/blocks';
import styles from './Main.module.scss';

const Main = ({ children, ...rest }): JSX.Element => (
  <Section title='Main' {...rest} className={styles._}>
    {children}
  </Section>
);

export default Main;
