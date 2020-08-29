import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const BlockTable = () => {
  const { width, height } = useParams();

  return (
    <Fragment>
      {width && <p>{width}</p>}
      {height && <p>{height}</p>}
    </Fragment>
  );
};

export default BlockTable;
