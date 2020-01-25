import { fetchCurrencyExchange } from './actions';
import { expectSaga } from 'redux-saga-test-plan';

import { saga } from './sagas';

jest.mock('@/services/api', () => ({
  fetchCurrencyExchange: async () => testData
}));

const testData = [
  { code: 'USD', currency: 'US dollar', mid: 3.95 },
  { code: 'AUD', currency: 'Australian dollar', mid: 2.64 },
  { code: 'EUR', currency: 'Euro', mid: 4.4 },
];

describe('saga', () => {
  test('triggers API call on request', () => {
    return expectSaga(saga)
      .put(fetchCurrencyExchange.success({ data: testData }))
      .dispatch(fetchCurrencyExchange.request())
      .run();
  });

  test('does nothing without any action', () => {
    return expectSaga(saga)
      .not.put.like({ action: {} })
      .run();
  });
});
