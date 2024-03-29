import { create } from '@storybook/theming';

import logo from './bje_blocks_logo.svg';

const color = {
  dark: '#1f1f20',
  primary: '#2b4c7e',
  secondary: '#567ebc',
  grey: '#9bb0cf',
  light: '#dce0e6',
};

export default create({
  base: 'light',

  colorPrimary: color.primary,
  colorSecondary: color.secondary,

  brandTitle: 'Blocks',
  brandUrl: 'https://blocks.bje.co',
  brandImage: logo,

  // UI
  appBg: color.light,
  appContentBg: '#efefef',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Franz Sans","Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: color.primary,
  textMutedColor: color.grey,

  // Toolbar default and active colors
  barTextColor: color.light,
  barSelectedColor: color.primary,
  barBg: color.grey,

  // Form colors
  // inputBg: '#dce0e6',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,
});
