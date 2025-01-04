declare global {
  interface CurrencyRateResponse {
    data: CurrencyRateData;
  }

  interface CurrencyRateData {
    getCurrencyRate: GetCurrencyRate[];
  }

  interface GetCurrencyRate {
    id: number;
    name: string;
    symbol: string;
    market_cap: number;
    price: number;
    volume_24h: number;
    percent_change_24h: number;
    last_updated: string;
    quote: Quote;
  }

  interface Quote {
    USD: USD;
  }

  interface USD {
    price: number;
    volume_24h: number;
    volume_change_24h: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_60d: number;
    percent_change_90d: number;
    market_cap: number;
    market_cap_dominance: number;
    fully_diluted_market_cap: number;
    tvl: null;
    last_updated: string;
  }

  interface Token {
    name: string;
    fullName: string;
    currentPrice: number;
    percentChange: number;
    data: ChartData[];
  }

  interface ChartData {
    name: string;
    value: number;
  }

  interface CurrencyPairRateData {
    currencyPairRate: CurrencyPairRate;
  }

  interface CurrencyPairRate {
    baseRate: number;
    quoteRate: number;
    convertedValue: number;
    convertedValueInUsd: number;
  }
}

export {};
