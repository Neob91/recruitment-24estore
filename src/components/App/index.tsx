import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { CurrencyList, Section } from '@/components';
import { fetchCurrencyExchange } from '@/store/actions';
import { appStyle } from './style';

interface StateProps {
  currencyCodesAll: string[];
  currencyCodesFav: string[];
}

interface DispatchProps {
  onLoad(): void;
}

interface Props extends DispatchProps, StateProps {}

export const PApp: React.FC<Props> = ({
  onLoad,
  currencyCodesAll,
  currencyCodesFav,
}) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className={appStyle}>
      <Section title="All currencies">
        <CurrencyList codes={currencyCodesAll} />
      </Section>
      <Section title="Favorite currencies">
        <CurrencyList codes={currencyCodesFav} />
      </Section>
    </div>
  );
};

const mapState = state => {
  const { currencyCodesAll, currencyCodesFav } = state;
  return { currencyCodesAll, currencyCodesFav };
};

const mapDispatch = dispatch => ({
  onLoad: () => dispatch(fetchCurrencyExchange.request()),
});

export const App = connect(mapState, mapDispatch)(PApp);
