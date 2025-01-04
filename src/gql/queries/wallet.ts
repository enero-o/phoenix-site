import { gql } from '@apollo/client';

export const CREATE_WALLET = gql`
  mutation createWallet {
    createTronWallet {
      _id
      userId
      address
      meta {
        active
        createdAt
      }
    }
  }
`;

export const GET_WALLETS = gql`
  query GetWallets {
    getWallets {
      accountId
      customerId
      address
      balance {
        fiatBalance
        availableBalance
      }
      currency
      network
      rate
    }
  }
`;

export const GET_WALLET_DETAILS = gql`
  query getWalletDetails($accountId: String) {
    getWalletDetails(accountId: $accountId) {
      balance {
        accountBalance
        availableBalance
        fiatBalance
      }
      address
      currency
      rate
      network
      accountId
      customerId
      active
      frozen
    }
  }
`;

export const GET_WALLET_TRANSACTIONS = gql`
  query GetWalletTransactions($data: WalletTransactionInput) {
    getWalletTransactions(data: $data) {
      accountId
      counterAccountId
      currency
      amount
      anonymous
      created
      marketValue {
        amount
        currency
        sourceDate
        source
      }
      operationType
      transactionType
      reference
      transactionCode
      senderNote
      recipientNote
      paymentId
      attr
      address
      txId
    }
  }
`;
