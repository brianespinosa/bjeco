module.exports = {
  testEnvironment: 'jsdom',
  displayName: 'blocks',
  preset: '../../jest.preset.ts',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  coverageDirectory: '../../coverage/libs/blocks',
};
