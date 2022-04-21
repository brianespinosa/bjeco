import React from 'react';
import BlockImg from './BlockImg';
import styles from './BlockGrid.module.scss';

const BlockRow = ({ columns = 1 }) => {
  const rowBlocks = [];

  for (let i = 0; i < columns; i++) {
    rowBlocks.push(<BlockImg />);
  }

  return <div className={styles.BlockRow}>{rowBlocks}</div>;
};

export default BlockRow;
