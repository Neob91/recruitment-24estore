import { createAction, createAsyncAction } from 'typesafe-actions';
import { Currency } from './types';

export const fetchCurrencyExchange = createAsyncAction(
  'FETCH_CURRENCY_EXCHANGE_REQUEST',
  'FETCH_CURRENCY_EXCHANGE_SUCCESS',
  'FETCH_CURRENCY_EXCHANGE_FAILURE'
)<void, { data: Currency[] }, { error: any }>();

export const toggleFavoriteCurrency = createAction('TOGGLE_FAVORITE_CURRENCY')<{
  code: string;
}>();
