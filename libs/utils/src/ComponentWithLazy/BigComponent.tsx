import { PROMISE_DELAY } from './_config';

const BigComponent = (): JSX.Element => {
  return <div>{`I should show after a ${PROMISE_DELAY}ms timeout.`}</div>;
};

export default BigComponent;
