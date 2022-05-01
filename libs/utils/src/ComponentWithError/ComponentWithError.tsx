/**
 * A component for use in testing that will throw a new Error().
 */
export const ComponentWithError = (): never => {
  throw new Error('I am a component throwing an error.');
};
