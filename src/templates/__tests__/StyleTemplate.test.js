import React from 'react';
import { render } from '@testing-library/react';
import StyleTemplate from '../StyleTemplate';

describe('<StyleTemplate />', () => {
  it('renders Wrapper without crashing', () => {
    const { getByTestId } = render(<StyleTemplate />);

    expect(getByTestId('theme-provider')).toBeInTheDocument();
  });
});
