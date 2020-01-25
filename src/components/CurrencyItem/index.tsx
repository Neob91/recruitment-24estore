import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';

import { toggleFavoriteCurrency } from '@/store/actions';
import { StoreState } from '@/store/types';
import { itemStyle, itemFavStyle } from './style';

interface OwnProps {
  code: string;
}

interface StateProps {
  name: string;
  mid: number;
  isFavorite: boolean;
}

interface DispatchProps {
  onClick(code: string): void;
}

interface Props extends OwnProps, StateProps, DispatchProps {}

export const PCurrencyItem: React.FC<Props> = ({
  code,
  name,
  mid,
  isFavorite,
  onClick,
}) => {
  const handleClick = useCallback(() => onClick(code), [onClick, code]);

  return (
    <div
      className={cx(itemStyle, isFavorite ? itemFavStyle : null)}
      onClick={handleClick}
    >
      <div>{code}</div>
      <div>{name}</div>
      <div>{mid}</div>
    </div>
  );
};

const mapState = (state: StoreState, ownProps: OwnProps): StateProps => {
  const { currency: name, mid } = state.currencyItems[ownProps.code];
  const isFavorite = state.currencyCodesFav.indexOf(ownProps.code) !== -1;

  return { name, mid, isFavorite };
};

const mapDispatch = dispatch => ({
  onClick: (code: string) => dispatch(toggleFavoriteCurrency({ code })),
});

export const CurrencyItem = connect(mapState, mapDispatch)(PCurrencyItem);
