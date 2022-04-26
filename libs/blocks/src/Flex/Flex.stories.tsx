import Flex from './Flex';

export default {
  title: 'Flex',
  component: Flex,
};

export const Empty = (args) => <Flex {...args}></Flex>;
export const Default = (args) => <Flex {...args}>Hello</Flex>;
