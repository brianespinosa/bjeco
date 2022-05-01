import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './';

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

export const Empty: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}></Flex>
);
export const Default: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>Hello</Flex>
);
