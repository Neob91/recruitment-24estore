import { call, put, takeEvery } from 'redux-saga/effects'

import * as api from '@/services/api';
import { fetchCurrencyExchange } from './actions';

export function* fetchCurrencyExchangeSaga(action) {
  try {
    const data = yield call(api.fetchCurrencyExchange);
    yield put(fetchCurrencyExchange.success({ data }));
  } catch (error) {
    yield put(fetchCurrencyExchange.failure({ error }));
  }
}

export function* saga() {
  yield takeEvery(fetchCurrencyExchange.request, fetchCurrencyExchangeSaga)
}
