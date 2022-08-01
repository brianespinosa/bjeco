import { useRef } from 'react';
import Head from 'next/head';
import { Header, Main, DivideSVG, FormField } from '../../components';
import { Title } from '@bjeco/blocks';
import { Form, useFormState } from 'ariakit/form';

const getFormStateAttributes = (formState, fieldName) => ({
  name: formState.names[fieldName],
  value: formState.values[fieldName],
});

const Divider = (): JSX.Element => {
  const svgRef = useRef(null);

  const handleSVGScroll = () => svgRef.current.scrollIntoView();
  const handleFocus = (event) => {
    event.target.select();
    handleSVGScroll();
  };

  const formState = useFormState({
    defaultValues: {
      overallWidth: '12',
      dividerCount: '3',
      dividerWidth: '.75',
    },
  });

  formState.useSubmit(() => {
    console.log(formState);
  });

  const getNumber = (attribute) => Number(formState.values[attribute]);

  const dividerTotalWidth =
    getNumber('dividerCount') * getNumber('dividerWidth');
  const sectionCount = getNumber('dividerCount') + 1;
  const sectionWidth =
    (getNumber('overallWidth') - dividerTotalWidth) / sectionCount;

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
        {/* <Placeholder data={formState.values} />
        <Placeholder
          data={{
            dividerTotalWidth,
            sectionCount,
            sectionWidth,
          }}
        /> */}
        <div ref={svgRef}>
          <DivideSVG
            dividerCount={getNumber('dividerCount')}
            dividerWidth={getNumber('dividerWidth')}
            overallWidth={getNumber('overallWidth')}
            sectionCount={sectionCount}
            sectionWidth={sectionWidth}
          />
        </div>
        <Form state={formState} className='form'>
          <FormField
            {...getFormStateAttributes(formState, 'overallWidth')}
            label='Overall Width'
            required
            type='number'
            inputMode='decimal'
            onFocus={handleFocus}
            min={0}
            step='any'
          />
          <FormField
            {...getFormStateAttributes(formState, 'dividerCount')}
            label='Divider Count (dadoes)'
            required
            type='number'
            inputMode='decimal'
            min={0}
            onFocus={handleFocus}
            max={formState.values.overallWidth}
          />
          <FormField
            {...getFormStateAttributes(formState, 'dividerWidth')}
            label='Divider Width'
            required
            type='number'
            inputMode='decimal'
            step='any'
            onFocus={handleFocus}
            min={0}
            max={getNumber('overallWidth') / getNumber('dividerCount')}
          />
        </Form>
      </Main>
    </>
  );
};

Divider.displayName = 'DividerPage';

export default Divider;
