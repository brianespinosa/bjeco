import styles from './Main.module.scss';

const Main = ({ children, ...rest }) => (
  <main {...rest} className={styles._}>
    {children}
  </main>
);

export default Main;
