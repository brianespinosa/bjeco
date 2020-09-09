import Head from 'next/head';
// eslint-disable-next-line unicorn/prevent-abbreviations
import AttrSlider from '../../components/AttrSlider';
import BlockGrid from '../../components/BlockGrid';

const CuttingBoard = () => {
  return (
    <div style={{ margin: 'auto', maxWidth: '60em' }}>
      <Head>
        <title>Cutting Board</title>
      </Head>

      <AttrSlider label='Rows' attribute='rows' defaultValue={8} />
      <AttrSlider label='Columns' attribute='columns' defaultValue={6} />

      <BlockGrid></BlockGrid>

      <pre>{/* <code>{JSON.stringify(router, undefined, '  ')}</code> */}</pre>
    </div>
  );
};

export default CuttingBoard;
