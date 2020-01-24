import { createReducer } from 'typesafe-actions';

import { fetchCurrencyExchange } from './actions';
import { IState } from './types';

const initialState: IState = {
  currencyData: {},
  currencyCodes: [],
  currencyFavorites: [],
  isFetched: false
};

export const reducer = createReducer<IState>(initialState)
  .handleAction(fetchCurrencyExchange.success, (state, action) => {
    const { response } = action.payload;
    const currencyCodes = [];
    const currencyData = {};

    //response.forEach();

    return { ...state, isFetched: true, currencyData, currencyCodes };
  });
