import { call, put, takeEvery } from 'redux-saga/effects'

import * as api from '@/services/api';
import { fetchCurrencyExchange } from './actions';

export function* fetchCurrencyExchangeSaga(action) {
  const { response, error } = yield call(api.fetchCurrencyExchange);

  if (error) {
    yield put(fetchCurrencyExchange.success({ response }));
    return;
  }

  yield put(fetchCurrencyExchange.failure({ error }));
}

export function* saga() {
  yield takeEvery(fetchCurrencyExchange.request, fetchCurrencyExchangeSaga)
}
