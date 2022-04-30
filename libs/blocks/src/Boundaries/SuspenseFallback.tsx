import styles from './SuspenseFallback.module.scss';

const SuspenseFallback: React.VoidFunctionComponent = () => {
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
