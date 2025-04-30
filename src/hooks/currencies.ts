import { useQuery } from '@apollo/client';

import { GET_CURRENCIES, GET_CURRENCY_RATE, GET_QUOTE } from '@lyte/gql/queries/currency';
import type { CurrencyData } from '@lyte/types/type';

export const useCurrencies = () => {
  return useQuery<CurrencyData>(GET_CURRENCIES);
};

export const useQuote = (baseCurrency?: string, quoteCurrency?: string, amount?: string) => {
  // toDo replace this with internal logic for data pulled

  return useQuery(GET_QUOTE, {
    variables: {
      query: {
        baseCurrency,
        quoteCurrency,
        amount,
      },
    },
    skip: !amount,
  });
};

export const useCurrencyRate = () => {
  // eslint-disable-next-line no-undef
  return useQuery<CurrencyRateData>(GET_CURRENCY_RATE);
};
