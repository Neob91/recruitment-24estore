import { createAsyncAction } from 'typesafe-actions';

export const fetchCurrencyExchange = createAsyncAction(
  'FETCH_CURRENCY_EXCHANGE_REQUEST',
  'FETCH_CURRENCY_EXCHANGE_SUCCESS',
  'FETCH_CURRENCY_EXCHANGE_FAILURE'
)<void, any, any>();

