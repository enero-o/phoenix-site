import { gql } from '@apollo/client';

export const GET_CURRENCIES = gql`
  query GetCurrencies {
    getCurrencies {
      name
      network
    }
  }
`;

export const GET_CURRENCY_RATE = gql`
  query GetCurrencyRate {
    getCurrencyRate {
      id
      name
      symbol
      market_cap
      price
      volume_24h
      percent_change_24h
      last_updated
      quote
    }
  }
`;

export const GET_BANKS = gql`
  query GetBanks {
    getBanks {
      id
      code
      name
    }
  }
`;

export const VERIFY_BANK_DETAILS = gql`
  mutation VerifyBankDetails($data: VerifyBankInput) {
    verifyBankDetails(data: $data) {
      number
      name
    }
  }
`;

export const GET_QUOTE = gql`
  query getQuote($query: SwapCurrencyInput) {
    getQuote(query: $query) {
      amount
      _id
    }
  }
`;
