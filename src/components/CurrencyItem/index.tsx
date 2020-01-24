import React from 'react';
import { connect } from 'react-redux';

import { IState } from '@/store/types';

interface IOwnProps {
  code: string;
}

interface IStateProps {
  name: string;
  mid: number;
  isFavorite: boolean;
}

interface IProps extends IOwnProps, IStateProps {}

export const PCurrencyItem: React.FC<IProps> = ({ code, name, mid, isFavorite }) => {
  return (
    <div>
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

export const CurrencyItem = connect(mapState)(PCurrencyItem);
