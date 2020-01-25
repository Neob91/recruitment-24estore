import React from 'react';
import Renderer from 'react-test-renderer';
import { PCurrencyItem } from '.';

describe('CurrencyItem', () => {
  it('renders correctly', () => {
    const tree = Renderer
      .create(<PCurrencyItem code="EUR" name="Euro" mid={4.2} isFavorite={false} onClick={() => null} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
