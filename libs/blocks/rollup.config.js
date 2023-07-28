const nrwlConfig = require('@nx/react/plugins/bundle-rollup');
// const { nodeResolve } = require('@rollup/plugin-node-resolve');
// const commonjs = require('rollup-plugin-commonjs');

// const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  return {
    ...nxConfig,
    plugins: [
      // nodeResolve({ extensions, preferBuiltins: false }),
      ...nxConfig.plugins,
    ],
  };
};
