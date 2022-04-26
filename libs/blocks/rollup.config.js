const nrwlConfig = require('@nrwl/react/plugins/bundle-rollup');

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  nxConfig.output.inlineDynamicImports = false;
  nxConfig.output.format = undefined;

  console.log(nxConfig);

  return {
    ...nxConfig,
    input: [
      // nxConfig.input,
      '/Users/bespinosa/Web/bjeco/libs/blocks/src/Flex/index.ts',
    ],
  };
};
