import { gql } from '@apollo/client';

export const CREATE_TRANSACTION = gql`
  mutation CreateTransaction($data: TransactionInput) {
    createTransaction(data: $data) {
      _id
      quoteId
      status
    }
  }
`;

export const UPLOAD_RECEIPT = gql`
  mutation UploadReceipt($data: UploadReceiptInput) {
    uploadReceipt(data: $data) {
      _id
      status
      paymentRef
      reference
    }
  }
`;

export const GET_TRANSACTION = gql`
  query GetTransaction($query: TransactionFilter) {
    getTransaction(query: $query) {
      _id
      status
      receiver {
        name
      }
      date
    }
  }
`;

export const SEND_CURRENCY = gql`
  mutation SendCurrency($data: SendCurrencyInput) {
    sendCurrency(data: $data) {
      reference
    }
  }
`;
