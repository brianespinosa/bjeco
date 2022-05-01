import { render } from '@testing-library/react';

import { Boundaries } from './Boundaries';

describe('Boundaries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Boundaries />);
    expect(baseElement).toBeTruthy();
  });
});
