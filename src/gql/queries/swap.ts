import { gql } from '@apollo/client';

export const SWAP_CURRENCY = gql`
  mutation SwapCurrency($data: String) {
    swapCurrency(quoteId: $data) {
      id
    }
  }
`;
