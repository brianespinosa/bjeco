import React from 'react';
import { useRouter } from 'next/router';
import BlockRow from './BlockRow';
import styles from './BlockGrid.module.scss';

const BlockGrid = () => {
  const { query } = useRouter();

  const { columns, rows } = query;

  const rowContent = [];

  for (let i = 0; i < rows; i++) {
    rowContent.push(<BlockRow columns={columns} />);
  }

  return <div className={styles.BlockGrid}>{rowContent}</div>;
};

export default BlockGrid;
