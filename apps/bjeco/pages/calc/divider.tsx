import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import Main from '../../components/Main';
import DivideSVG from '../../components/DivideSVG';
// import Placeholder from '../../components/Placeholder';
import FormField from '../../components/FormField';
import { Title } from '@bjeco/blocks';
import { Form, useFormState } from 'ariakit/form';

const getFormStateAttributes = (formState, fieldName) => ({
  name: formState.names[fieldName],
  value: formState.values[fieldName],
});

const handleFocus = (event) => event.target.select();

const Divider = (): JSX.Element => {
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
        <DivideSVG
          dividerCount={getNumber('dividerCount')}
          dividerWidth={getNumber('dividerWidth')}
          overallWidth={getNumber('overallWidth')}
          sectionCount={sectionCount}
          sectionWidth={sectionWidth}
        />
        <Form state={formState} className='form'>
          <FormField
            {...getFormStateAttributes(formState, 'overallWidth')}
            label='Overall Width'
            required
            type='number'
            inputmode='decimal'
            onFocus={handleFocus}
            min={0}
            step='any'
          />
          <FormField
            {...getFormStateAttributes(formState, 'dividerCount')}
            label='Divider Count (dadoes)'
            required
            type='number'
            inputmode='decimal'
            min={0}
            onFocus={handleFocus}
            max={formState.values.overallWidth}
          />
          <FormField
            {...getFormStateAttributes(formState, 'dividerWidth')}
            label='Divider Width'
            required
            type='number'
            inputmode='decimal'
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
