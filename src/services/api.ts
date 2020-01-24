import axios from 'axios';

export const fetchCurrencyExchange = async () => {
  const resp = await axios.get('http://api.nbp.pl/api/exchangerates/tables/A')
  return resp.data[0].rates.sort((a, b) => a.code > b.code ? 1 : -1);
}
