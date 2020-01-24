export interface ICurrency {
  currency: string;
  code: string;
  mid: number;
}

export interface IState {
  currencyItems: {
    [key: string]: ICurrency;
  };
  currencyCodesAll: string[];
  currencyCodesFav: string[];
  isFetched: boolean;
}
