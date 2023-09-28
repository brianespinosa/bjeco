import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title } from './Title';

export default {
  title: 'Title',
  component: Title,
} as ComponentMeta<typeof Title>;

export const Default: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Some Title</Title>
);

export const Horizontal: ComponentStory<typeof Title> = (args) => (
  <Title {...args} pre='Pre' post='Post'>
    Horizontal Content
  </Title>
);

export const Vertical: ComponentStory<typeof Title> = (args) => (
  <Title {...args} above='Above' below='Below'>
    Vertical Content
  </Title>
);

export const Both: ComponentStory<typeof Title> = (args) => (
  <Title {...args} above='Above' below='Below' pre='Pre' post='Post'>
    All Content
  </Title>
);
