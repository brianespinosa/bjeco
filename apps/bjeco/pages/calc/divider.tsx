'use client';

import { Boundaries, Placeholder } from '@bjeco/blocks';
import { useRef } from 'react';
import Head from 'next/head';
import { Header, Main, DivideSVG, FormField } from '../../components';
import { Title } from '@bjeco/blocks';
import { Form, useFormStore } from '@ariakit/react';

const getformStoreAttributes = (formStore, fieldName) => ({
  name: formStore.names[fieldName],
  value: formStore.useValue(fieldName),
});

const Divider = (): JSX.Element => {
  const svgRef = useRef(null);

  const handleSVGScroll = () => svgRef.current.scrollIntoView();

  const handleFocus = (event) => {
    event.target.select();
    handleSVGScroll();
  };

  const formStore = useFormStore({
    defaultValues: {
      overallWidth: '12',
      dividerCount: '3',
      dividerWidth: '.75',
    },
  });

  formStore.useSubmit(() => {
    console.log(formStore);
  });

  const overallWidth = Number(formStore.useValue('overallWidth'));
  const dividerCount = Number(formStore.useValue('dividerCount'));
  const dividerWidth = Number(formStore.useValue('dividerWidth'));
  const dividerTotalWidth = dividerCount * dividerWidth;
  const sectionCount = dividerCount + 1;
  const sectionWidth = (overallWidth - dividerTotalWidth) / sectionCount;

  return (
    <>
      <Head>
        <title>Divider</title>
      </Head>
      <Header />
      <Main>
        <Title>Dividers</Title>
        <p>
          This calculator is used to calculate even space division, common for
          shelves, etc. Eventually additional configurations will be added for
          first/last space offset and first/last divider.
        </p>
        <em>v2</em>
        {/* <Placeholder data={formStore.useState().value} /> */}
        {/* <Placeholder
          data={{
            dividerTotalWidth,
            sectionCount,
            sectionWidth,
          }}
        /> */}
        <div ref={svgRef}>
          <Boundaries>
            <DivideSVG
              dividerCount={dividerCount}
              dividerWidth={dividerWidth}
              overallWidth={overallWidth}
              sectionCount={sectionCount}
              sectionWidth={sectionWidth}
            />
          </Boundaries>
        </div>
        <Form store={formStore} className='form'>
          <FormField
            {...getformStoreAttributes(formStore, 'overallWidth')}
            label='Overall Width'
            required
            type='number'
            inputMode='decimal'
            onFocus={handleFocus}
            min={0}
            step='any'
          />
          <FormField
            {...getformStoreAttributes(formStore, 'dividerCount')}
            label='Divider Count (dadoes)'
            required
            type='number'
            inputMode='decimal'
            min={0}
            onFocus={handleFocus}
            max={formStore.useValue(formStore.names.overallWidth)}
          />
          <FormField
            {...getformStoreAttributes(formStore, 'dividerWidth')}
            label='Divider Width'
            required
            type='number'
            inputMode='decimal'
            step='any'
            onFocus={handleFocus}
            min={0}
            max={overallWidth / dividerCount}
          />
        </Form>
      </Main>
    </>
  );
};

Divider.displayName = 'DividerPage';

export default Divider;
