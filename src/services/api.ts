import axios from 'axios';

export const fetchCurrencyExchange = async () => {
  const resp = await axios.get('https://api.nbp.pl/api/exchangerates/tables/A');
  return resp.data[0].rates;
};
