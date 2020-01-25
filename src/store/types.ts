export interface Currency {
  currency: string;
  code: string;
  mid: number;
}

export interface StoreState {
  currencyItems: {
    [key: string]: Currency;
  };
  currencyCodesAll: string[];
  currencyCodesFav: string[];
  isFetched: boolean;
}
