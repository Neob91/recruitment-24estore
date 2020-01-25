import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { CurrencyList } from '.';

describe('CurrencyList', () => {
  it('renders correctly', () => {
    const r = new ShallowRenderer();

    r.render(<CurrencyList codes={['EUR', 'USD', 'AUD']} />);
    expect(r.getRenderOutput()).toMatchSnapshot();
  });
});
