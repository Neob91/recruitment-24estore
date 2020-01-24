import { createReducer } from 'typesafe-actions';

import { fetchCurrencyExchange } from './actions';
import { IState } from './types';

const initialState: IState = {
  currencyItems: {},
  currencyCodesAll: [],
  currencyCodesFav: [],
  isFetched: false
};

export const reducer = createReducer<IState>(initialState)
  .handleAction(fetchCurrencyExchange.success, (state, action) => {
    const { data } = action.payload;
    const currencyCodesAll = [];
    const currencyItems = {};

    data.forEach(item => {
      currencyCodesAll.push(item.code);
      currencyItems[item.code] = item;
    });

    return { ...state, isFetched: true, currencyItems, currencyCodesAll };
  });
