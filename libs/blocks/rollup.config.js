import nrwlConfig from '@nrwl/react/plugins/bundle-rollup';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';

// const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = (config) => {
  const nxConfig = nrwlConfig(config);

  return {
    ...nxConfig,
    plugins: [
      // nodeResolve({ extensions, preferBuiltins: false }),
      // commonjs(),
      ...nxConfig.plugins,
    ],
  };
};
