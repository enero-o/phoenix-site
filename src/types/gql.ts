/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query GetCurrencies {\n    getCurrencies {\n      name\n      network\n    }\n  }\n": types.GetCurrenciesDocument,
    "\n  query GetCurrencyRate {\n    getCurrencyRate {\n      id\n      name\n      symbol\n      market_cap\n      price\n      volume_24h\n      percent_change_24h\n      last_updated\n      quote\n    }\n  }\n": types.GetCurrencyRateDocument,
    "\n  query GetBanks {\n    getBanks {\n      id\n      code\n      name\n    }\n  }\n": types.GetBanksDocument,
    "\n  mutation VerifyBankDetails($data: VerifyBankInput) {\n    verifyBankDetails(data: $data) {\n      number\n      name\n    }\n  }\n": types.VerifyBankDetailsDocument,
    "\n  query getQuote($query: SwapCurrencyInput) {\n    getQuote(query: $query) {\n      price\n      _id\n    }\n  }\n": types.GetQuoteDocument,
    "\n  mutation SwapCurrency($data: String) {\n    swapCurrency(quoteId: $data) {\n      id\n    }\n  }\n": types.SwapCurrencyDocument,
    "\n  mutation CreateTransaction($data: TransactionInput) {\n    createTransaction(data: $data) {\n      _id\n      quoteId\n      status\n    }\n  }\n": types.CreateTransactionDocument,
    "\n  mutation UploadReceipt($data: UploadReceiptInput) {\n    uploadReceipt(data: $data) {\n      _id\n      status\n      paymentRef\n      reference\n    }\n  }\n": types.UploadReceiptDocument,
    "\n  query GetTransaction($query: TransactionFilter) {\n    getTransaction(query: $query) {\n      _id\n      status\n      receiver {\n        name\n      }\n      date\n    }\n  }\n": types.GetTransactionDocument,
    "\n  mutation SendCurrencyOffChain($data: SendCurrencyOffChainInput) {\n    sendCurrencyOffChain(data: $data) {\n      reference\n    }\n  }\n": types.SendCurrencyOffChainDocument,
    "\n  query GetWallets {\n    getWallets {\n      accountId\n      customerId\n      balance {\n        fiatBalance\n        availableBalance\n      }\n      currency\n      network\n      rate\n    }\n  }\n": types.GetWalletsDocument,
    "\n  query getWalletDetails($accountId: String) {\n    getWalletDetails(accountId: $accountId) {\n      balance {\n        accountBalance\n        availableBalance\n        fiatBalance\n      }\n      address\n      currency\n      rate\n      network\n      accountId\n      customerId\n      active\n      frozen\n    }\n  }\n": types.GetWalletDetailsDocument,
    "\n  query GetWalletTransactions($data: WalletTransactionInput) {\n    getWalletTransactions(data: $data) {\n      accountId\n      counterAccountId\n      currency\n      amount\n      anonymous\n      created\n      marketValue {\n        amount\n        currency\n        sourceDate\n        source\n      }\n      operationType\n      transactionType\n      reference\n      transactionCode\n      senderNote\n      recipientNote\n      paymentId\n      attr\n      address\n      txId\n    }\n  }\n": types.GetWalletTransactionsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrencies {\n    getCurrencies {\n      name\n      network\n    }\n  }\n"): (typeof documents)["\n  query GetCurrencies {\n    getCurrencies {\n      name\n      network\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCurrencyRate {\n    getCurrencyRate {\n      id\n      name\n      symbol\n      market_cap\n      price\n      volume_24h\n      percent_change_24h\n      last_updated\n      quote\n    }\n  }\n"): (typeof documents)["\n  query GetCurrencyRate {\n    getCurrencyRate {\n      id\n      name\n      symbol\n      market_cap\n      price\n      volume_24h\n      percent_change_24h\n      last_updated\n      quote\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBanks {\n    getBanks {\n      id\n      code\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetBanks {\n    getBanks {\n      id\n      code\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifyBankDetails($data: VerifyBankInput) {\n    verifyBankDetails(data: $data) {\n      number\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation VerifyBankDetails($data: VerifyBankInput) {\n    verifyBankDetails(data: $data) {\n      number\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getQuote($query: SwapCurrencyInput) {\n    getQuote(query: $query) {\n      price\n      _id\n    }\n  }\n"): (typeof documents)["\n  query getQuote($query: SwapCurrencyInput) {\n    getQuote(query: $query) {\n      price\n      _id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SwapCurrency($data: String) {\n    swapCurrency(quoteId: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation SwapCurrency($data: String) {\n    swapCurrency(quoteId: $data) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateTransaction($data: TransactionInput) {\n    createTransaction(data: $data) {\n      _id\n      quoteId\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTransaction($data: TransactionInput) {\n    createTransaction(data: $data) {\n      _id\n      quoteId\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation UploadReceipt($data: UploadReceiptInput) {\n    uploadReceipt(data: $data) {\n      _id\n      status\n      paymentRef\n      reference\n    }\n  }\n"): (typeof documents)["\n  mutation UploadReceipt($data: UploadReceiptInput) {\n    uploadReceipt(data: $data) {\n      _id\n      status\n      paymentRef\n      reference\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetTransaction($query: TransactionFilter) {\n    getTransaction(query: $query) {\n      _id\n      status\n      receiver {\n        name\n      }\n      date\n    }\n  }\n"): (typeof documents)["\n  query GetTransaction($query: TransactionFilter) {\n    getTransaction(query: $query) {\n      _id\n      status\n      receiver {\n        name\n      }\n      date\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SendCurrencyOffChain($data: SendCurrencyOffChainInput) {\n    sendCurrencyOffChain(data: $data) {\n      reference\n    }\n  }\n"): (typeof documents)["\n  mutation SendCurrencyOffChain($data: SendCurrencyOffChainInput) {\n    sendCurrencyOffChain(data: $data) {\n      reference\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetWallets {\n    getWallets {\n      accountId\n      customerId\n      balance {\n        fiatBalance\n        availableBalance\n      }\n      currency\n      network\n      rate\n    }\n  }\n"): (typeof documents)["\n  query GetWallets {\n    getWallets {\n      accountId\n      customerId\n      balance {\n        fiatBalance\n        availableBalance\n      }\n      currency\n      network\n      rate\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getWalletDetails($accountId: String) {\n    getWalletDetails(accountId: $accountId) {\n      balance {\n        accountBalance\n        availableBalance\n        fiatBalance\n      }\n      address\n      currency\n      rate\n      network\n      accountId\n      customerId\n      active\n      frozen\n    }\n  }\n"): (typeof documents)["\n  query getWalletDetails($accountId: String) {\n    getWalletDetails(accountId: $accountId) {\n      balance {\n        accountBalance\n        availableBalance\n        fiatBalance\n      }\n      address\n      currency\n      rate\n      network\n      accountId\n      customerId\n      active\n      frozen\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetWalletTransactions($data: WalletTransactionInput) {\n    getWalletTransactions(data: $data) {\n      accountId\n      counterAccountId\n      currency\n      amount\n      anonymous\n      created\n      marketValue {\n        amount\n        currency\n        sourceDate\n        source\n      }\n      operationType\n      transactionType\n      reference\n      transactionCode\n      senderNote\n      recipientNote\n      paymentId\n      attr\n      address\n      txId\n    }\n  }\n"): (typeof documents)["\n  query GetWalletTransactions($data: WalletTransactionInput) {\n    getWalletTransactions(data: $data) {\n      accountId\n      counterAccountId\n      currency\n      amount\n      anonymous\n      created\n      marketValue {\n        amount\n        currency\n        sourceDate\n        source\n      }\n      operationType\n      transactionType\n      reference\n      transactionCode\n      senderNote\n      recipientNote\n      paymentId\n      attr\n      address\n      txId\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;