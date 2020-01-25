import { fetchCurrencyExchange, toggleFavoriteCurrency } from './actions';
import { reducer } from './reducer';

const testState = {
  currencyCodesAll: ['AUD', 'EUR', 'USD'],
  currencyCodesFav: ['EUR'],
  currencyItems: {
    USD: { code: 'USD', currency: 'US dollar', mid: 3.95 },
    AUD: { code: 'AUD', currency: 'Australian dollar', mid: 2.64 },
    EUR: { code: 'EUR', currency: 'Euro', mid: 4.4 },
  },
  isFetched: true,
  foo: 'bar'
};

describe('reducer', () => {
  test('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currencyItems: {},
      currencyCodesAll: [],
      currencyCodesFav: [],
      isFetched: false,
    });
  });

  test('stores fetched currencies', () => {
    const action = fetchCurrencyExchange.success({
      data: [
        { code: 'USD', currency: 'US dollar', mid: 3.95 },
        { code: 'AUD', currency: 'Australian dollar', mid: 2.64 }
      ]
    });

    expect(reducer({ foo: 'bar' }, action)).toEqual({
      currencyCodesAll: ['AUD', 'USD'], // currency codes are alphabetized
      currencyItems: {
        USD: { code: 'USD', currency: 'US dollar', mid: 3.95 },
        AUD: { code: 'AUD', currency: 'Australian dollar', mid: 2.64 }
      },
      isFetched: true,
      foo: 'bar' // existing keys are kept intact, whatever they are
    });
  });

  test('sets favorite currency', () => {
    const action = toggleFavoriteCurrency({ code: 'USD' });

    expect(reducer(testState, action)).toEqual({
      currencyCodesAll: ['AUD', 'EUR', 'USD'],
      currencyCodesFav: ['EUR', 'USD'], // USD is now in favorites
      currencyItems: {
        USD: { code: 'USD', currency: 'US dollar', mid: 3.95 },
        AUD: { code: 'AUD', currency: 'Australian dollar', mid: 2.64 },
        EUR: { code: 'EUR', currency: 'Euro', mid: 4.4 },
      },
      isFetched: true,
      foo: 'bar' // existing keys are kept intact, whatever they are
    });
  });

  test('removes favorite currency', () => {
    const action = toggleFavoriteCurrency({ code: 'EUR' });

    expect(reducer(testState, action)).toEqual({
      currencyCodesAll: ['AUD', 'EUR', 'USD'],
      currencyCodesFav: [], // EUR is no longer in favorites
      currencyItems: {
        USD: { code: 'USD', currency: 'US dollar', mid: 3.95 },
        AUD: { code: 'AUD', currency: 'Australian dollar', mid: 2.64 },
        EUR: { code: 'EUR', currency: 'Euro', mid: 4.4 },
      },
      isFetched: true,
      foo: 'bar' // existing keys are kept intact, whatever they are
    });
  });
});
