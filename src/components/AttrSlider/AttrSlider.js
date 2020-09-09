import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { useRouter } from 'next/router';
import styles from './AttrSlider.module.scss';

/* eslint-disable sort-keys*/
const marks = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
  11: '',
  12: '',
  13: '',
  14: '',
  15: '',
  16: '',
  17: '',
  18: '',
  19: '',
  20: '',
};
/* eslint-enable sort-keys*/

const AttributeSlider = ({ attribute, label, defaultValue, ...rest }) => {
  const router = useRouter();

  const [value, setValue] = useState(defaultValue);

  // Set attribute value as query param
  useEffect(
    () => {
      // Get all existing queries from router in case some exist
      const queries = router.query || {};

      // Add our attribute and value to the queries object
      queries[attribute] = value;

      // Push our updated query params to the router
      router.replace(
        {
          query: queries,
        },
        undefined,
        // Shallow only since these are query params on the same page
        { shallow: true }
      );
    },
    // Only run if attribute or defaultValue have changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attribute, value]
  );

  return (
    <div className={styles._}>
      <Slider
        {...rest}
        marks={marks}
        tipFormatter={(value) => value + ' ' + label}
        max={20}
        min={1}
        onAfterChange={setValue}
        defaultValue={defaultValue}
        tooltipVisible
      />
    </div>
  );
};

export default AttributeSlider;
