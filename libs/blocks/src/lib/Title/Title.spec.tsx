import { render } from '@testing-library/react';

import { Title } from './Title';

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title>I'm a Title!</Title>);
    expect(baseElement).toBeTruthy();
  });
});
