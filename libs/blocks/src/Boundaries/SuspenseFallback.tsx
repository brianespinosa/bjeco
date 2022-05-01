import styles from './SuspenseFallback.module.scss';

const SuspenseFallback = (): JSX.Element => {
  return (
    <div className={styles['_']}>
      <div className={styles['Suspending']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SuspenseFallback;
