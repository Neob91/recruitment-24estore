import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencyExchange } from '@/store/actions';

interface IStateProps {
  currencyData: any;
}

interface IDispatchProps {
  onLoad(): void;
}

interface IProps extends IDispatchProps, IStateProps {}

export const PApp: React.FC<IProps> = ({ onLoad, currencyData }) => {
  useEffect(() => {
    onLoad();
  });
  return (
    <div>
    </div>
  );
};

const mapState = state => {
  const { currencyData, currencyCodes, currencyFavorites } = state;
  return { currencyData, currencyCodes, currencyFavorites };
};

const mapDispatch = dispatch => ({
  onLoad: dispatch(fetchCurrencyExchange.request())
});

export const App = connect(mapState, mapDispatch)(PApp);
