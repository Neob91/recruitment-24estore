import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { cx } from 'emotion';

import { toggleFavoriteCurrency } from '@/store/actions';
import { IState } from '@/store/types';
import { itemStyle, itemFavStyle } from './style';

interface IOwnProps {
  code: string;
}

interface IStateProps {
  name: string;
  mid: number;
  isFavorite: boolean;
}

interface IDispatchProps {
  onClick(code: string): void;
}

interface IProps extends IOwnProps, IStateProps, IDispatchProps {}

export const PCurrencyItem: React.FC<IProps> = ({ code, name, mid, isFavorite, onClick }) => {
  const handleClick = useCallback(() => onClick(code), [onClick, code]);

  return (
    <div className={cx(itemStyle, isFavorite ? itemFavStyle : null)} onClick={handleClick}>
      <div>{code}</div>
      <div>{name}</div>
      <div>{mid}</div>
    </div>
  );
};

const mapState = (state: IState, ownProps: IOwnProps): IStateProps => {
  const { currency: name, mid } = state.currencyItems[ownProps.code];
  const isFavorite = state.currencyCodesFav.indexOf(ownProps.code) !== -1;

  return { name, mid, isFavorite };
};

const mapDispatch = dispatch => ({
  onClick: (code: string) => dispatch(toggleFavoriteCurrency(code))
});

export const CurrencyItem = connect(mapState, mapDispatch)(PCurrencyItem);
