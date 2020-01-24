import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { CurrencyList } from '@/components';
import { fetchCurrencyExchange } from '@/store/actions';

interface IStateProps {
  currencyCodesAll: string[];
  currencyCodesFav: string[];
  currencyItems: any;
}

interface IDispatchProps {
  onLoad(): void;
}

interface IProps extends IDispatchProps, IStateProps {}

export const PApp: React.FC<IProps> = ({ onLoad, currencyCodesAll }) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div>
      <CurrencyList codes={currencyCodesAll} />
    </div>
  );
};

const mapState = state => {
  const { currencyItems, currencyCodesAll, currencyCodesFav } = state;
  return { currencyItems, currencyCodesAll, currencyCodesFav };
};

const mapDispatch = dispatch => ({
  onLoad: () => dispatch(fetchCurrencyExchange.request())
});

export const App = connect(mapState, mapDispatch)(PApp);
