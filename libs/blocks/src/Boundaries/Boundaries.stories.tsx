import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentWithError, ComponentWithLazy } from '@bjeco/utils';
import { Boundaries } from './Boundaries';

export default {
  title: 'Boundaries',
  component: Boundaries,
} as ComponentMeta<typeof Boundaries>;

export const Default: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <div>I am a component with no problems. I should render just fine.</div>
  </Boundaries>
);
export const ErrorBoundary: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <ComponentWithError />
  </Boundaries>
);
export const SuspenseBoundary: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <ComponentWithLazy />
  </Boundaries>
);
