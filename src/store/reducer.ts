import { createReducer } from 'typesafe-actions';

import { fetchCurrencyExchange, toggleFavoriteCurrency } from './actions';
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
  })
  .handleAction(toggleFavoriteCurrency, (state, action) => {
    const { code } = action.payload;
    const oldFav = state.currencyCodesFav;
    const idx = oldFav.indexOf(code);

    const currencyCodesFav = idx !== -1 ?
      oldFav.slice(0, idx).concat(oldFav.slice(idx + 1)) :
      [ ...oldFav, code ];

    return { ...state, currencyCodesFav };
  });
