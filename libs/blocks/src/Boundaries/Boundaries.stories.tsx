import { lazy } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Boundaries from './Boundaries';

export default {
  title: 'Boundaries',
  component: Boundaries,
} as ComponentMeta<typeof Boundaries>;

const HappyComponent = () => (
  <div>I am a component with no problems. I should render just fine.</div>
);

const ComponentWithError = () => {
  throw new Error(
    'I am a component throwing an error! I should catch and not make the rest of the page explode.'
  );

  return <div>Error</div>;
};

const LazyComponent = lazy(() => {
  return new Promise((resolve) => {
    // @ts-expect-error: Argument of type 'Promise
    setTimeout(() => resolve(import('./test-components/BigComponent')), 2000);
  });
});

export const Default: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <HappyComponent></HappyComponent>
  </Boundaries>
);
export const ErrorBoundary: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <ComponentWithError></ComponentWithError>
  </Boundaries>
);
export const SuspenseBoundary: ComponentStory<typeof Boundaries> = (args) => (
  <Boundaries {...args}>
    <LazyComponent></LazyComponent>
  </Boundaries>
);
