export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AccountNumber: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Byte: { input: any; output: any; }
  CountryCode: { input: any; output: any; }
  Cuid: { input: any; output: any; }
  Currency: { input: any; output: any; }
  DID: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  GUID: { input: any; output: any; }
  HSL: { input: any; output: any; }
  HSLA: { input: any; output: any; }
  HexColorCode: { input: any; output: any; }
  Hexadecimal: { input: any; output: any; }
  IBAN: { input: any; output: any; }
  IP: { input: any; output: any; }
  IPv4: { input: any; output: any; }
  IPv6: { input: any; output: any; }
  ISBN: { input: any; output: any; }
  ISO8601Duration: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
  JWT: { input: any; output: any; }
  Latitude: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalEndTime: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  Locale: { input: any; output: any; }
  Long: { input: any; output: any; }
  Longitude: { input: any; output: any; }
  MAC: { input: any; output: any; }
  NegativeFloat: { input: any; output: any; }
  NegativeInt: { input: any; output: any; }
  NonEmptyString: { input: any; output: any; }
  NonNegativeFloat: { input: any; output: any; }
  NonNegativeInt: { input: any; output: any; }
  NonPositiveFloat: { input: any; output: any; }
  NonPositiveInt: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  Port: { input: any; output: any; }
  PositiveFloat: { input: any; output: any; }
  PositiveInt: { input: any; output: any; }
  PostalCode: { input: any; output: any; }
  RGB: { input: any; output: any; }
  RGBA: { input: any; output: any; }
  RoutingNumber: { input: any; output: any; }
  SafeInt: { input: any; output: any; }
  SemVer: { input: any; output: any; }
  Time: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
  URL: { input: any; output: any; }
  USCurrency: { input: any; output: any; }
  UUID: { input: any; output: any; }
  UnsignedFloat: { input: any; output: any; }
  UnsignedInt: { input: any; output: any; }
  UtcOffset: { input: any; output: any; }
  Void: { input: any; output: any; }
};

export type Balance = {
  __typename?: 'Balance';
  accountBalance: Scalars['String']['output'];
  availableBalance: Scalars['String']['output'];
  fiatBalance: Scalars['String']['output'];
};

export type Bank = {
  __typename?: 'Bank';
  code: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CmcRate = {
  __typename?: 'CmcRate';
  id?: Maybe<Scalars['Int']['output']>;
  last_updated?: Maybe<Scalars['String']['output']>;
  market_cap?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  percent_change_24h?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  quote?: Maybe<Scalars['JSONObject']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  volume_24h?: Maybe<Scalars['Float']['output']>;
};

export type CreateOrderInput = {
  amount: Scalars['String']['input'];
  currency1AccountId: Scalars['String']['input'];
  currency2AccountId: Scalars['String']['input'];
  fee?: InputMaybe<Scalars['Float']['input']>;
  feeAccountId?: InputMaybe<Scalars['String']['input']>;
  pair: Scalars['String']['input'];
  price: Scalars['String']['input'];
  type: OrderBookType;
};

export type CurrencyFilter = {
  _id?: InputMaybe<Scalars['ObjectID']['input']>;
  favorite?: InputMaybe<Scalars['Boolean']['input']>;
  rateId?: InputMaybe<Scalars['ObjectID']['input']>;
};

export type CurrencyList = {
  __typename?: 'CurrencyList';
  name?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
};

export type CurrencySentOffChain = {
  __typename?: 'CurrencySentOffChain';
  reference?: Maybe<Scalars['String']['output']>;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  basePair: Scalars['String']['output'];
  id: Scalars['String']['output'];
  source: Scalars['String']['output'];
  timestamp: Scalars['Float']['output'];
  value: Scalars['String']['output'];
};

export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type KeyValueInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Login = {
  __typename?: 'Login';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginToken = {
  __typename?: 'LoginToken';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresIn?: Maybe<Scalars['DateTime']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type MarketValue = {
  __typename?: 'MarketValue';
  amount?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  sourceDate?: Maybe<Scalars['Float']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  activatedAt?: Maybe<Scalars['DateTime']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deactivatedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createOrder?: Maybe<OrderBook>;
  createTransaction?: Maybe<Transaction>;
  createUser?: Maybe<User>;
  createWallet?: Maybe<Wallet>;
  login?: Maybe<Login>;
  send?: Maybe<SentResponse>;
  sendCurrencyOffChain?: Maybe<CurrencySentOffChain>;
  swapCurrency?: Maybe<OrderBook>;
  updateTransaction?: Maybe<Transaction>;
  uploadReceipt?: Maybe<Transaction>;
  validateUserCredentials?: Maybe<LoginToken>;
  verifyBankDetails?: Maybe<VerifyBank>;
};


export type MutationCreateOrderArgs = {
  data?: InputMaybe<CreateOrderInput>;
};


export type MutationCreateTransactionArgs = {
  data?: InputMaybe<TransactionInput>;
};


export type MutationCreateUserArgs = {
  data?: InputMaybe<UserInput>;
};


export type MutationCreateWalletArgs = {
  data?: InputMaybe<WalletInput>;
};


export type MutationLoginArgs = {
  data?: InputMaybe<LoginInput>;
};


export type MutationSendArgs = {
  data?: InputMaybe<SendInput>;
};


export type MutationSendCurrencyOffChainArgs = {
  data?: InputMaybe<SendCurrencyOffChainInput>;
};


export type MutationSwapCurrencyArgs = {
  quoteId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTransactionArgs = {
  data?: InputMaybe<UpdateTransactionInput>;
};


export type MutationUploadReceiptArgs = {
  data?: InputMaybe<UploadReceiptInput>;
};


export type MutationValidateUserCredentialsArgs = {
  data?: InputMaybe<UserCredentialsInput>;
};


export type MutationVerifyBankDetailsArgs = {
  data?: InputMaybe<VerifyBankInput>;
};

export enum Networks {
  Bsc = 'BSC',
  Btc = 'BTC',
  Eth = 'ETH',
  Tron = 'TRON'
}

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['String']['output']>;
  attr?: Maybe<TradeAttributes>;
  created?: Maybe<Scalars['Float']['output']>;
  currency1AccountId?: Maybe<Scalars['String']['output']>;
  currency2AccountId?: Maybe<Scalars['String']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  feeAccountId?: Maybe<Scalars['String']['output']>;
  fill?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isMaker?: Maybe<Scalars['Boolean']['output']>;
  pair?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type OrderBook = {
  __typename?: 'OrderBook';
  id?: Maybe<Scalars['String']['output']>;
};

export enum OrderBookType {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type PageInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortInput>;
};

export enum PaymentType {
  BankTransfer = 'BANK_TRANSFER',
  Card = 'CARD'
}

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  getBanks?: Maybe<Array<Maybe<Bank>>>;
  getCurrencies?: Maybe<Array<Maybe<CurrencyList>>>;
  getCurrency?: Maybe<Scalars['Currency']['output']>;
  getCurrencyRate?: Maybe<Array<Maybe<CmcRate>>>;
  getQuote?: Maybe<Order>;
  getTransaction?: Maybe<Transaction>;
  getTransactionMetrics?: Maybe<Scalars['JSONObject']['output']>;
  getTransactions?: Maybe<Transactions>;
  getWalletDetails?: Maybe<Wallet>;
  getWalletTransactions?: Maybe<Array<Maybe<WalletTransaction>>>;
  getWallets?: Maybe<Array<Maybe<Wallet>>>;
};


export type QueryGetCurrenciesArgs = {
  query?: InputMaybe<CurrencyFilter>;
};


export type QueryGetCurrencyArgs = {
  query?: InputMaybe<CurrencyFilter>;
};


export type QueryGetQuoteArgs = {
  query?: InputMaybe<SwapCurrencyInput>;
};


export type QueryGetTransactionArgs = {
  query?: InputMaybe<TransactionFilter>;
};


export type QueryGetTransactionMetricsArgs = {
  query?: InputMaybe<TransactionFilter>;
};


export type QueryGetTransactionsArgs = {
  data?: InputMaybe<TransactionQuery>;
};


export type QueryGetWalletDetailsArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetWalletTransactionsArgs = {
  data?: InputMaybe<WalletTransactionInput>;
};

export type Receiver = {
  __typename?: 'Receiver';
  accountNo?: Maybe<Scalars['String']['output']>;
  bankName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Array<Maybe<KeyValue>>>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

export type ReceiverInput = {
  accountNo?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type SendCurrencyOffChainInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  baseRate?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  recipientNote?: InputMaybe<Scalars['String']['input']>;
  senderNote?: InputMaybe<Scalars['String']['input']>;
  transactionCode?: InputMaybe<Scalars['String']['input']>;
};

export type SendInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount?: InputMaybe<Scalars['String']['input']>;
  fee?: InputMaybe<Scalars['String']['input']>;
  senderAccountId?: InputMaybe<Scalars['String']['input']>;
  senderNote?: InputMaybe<Scalars['String']['input']>;
};

export type SentResponse = {
  __typename?: 'SentResponse';
  completed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  txId?: Maybe<Scalars['String']['output']>;
};

export type SortInput = {
  direction: SortOrder;
  fieldName?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Status {
  Disbursed = 'DISBURSED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Received = 'RECEIVED'
}

export type SwapCurrencyInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  baseCurrency: Scalars['String']['input'];
  quoteCurrency: Scalars['String']['input'];
};

export enum SwapStage {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO'
}

export type TradeAttributes = {
  __typename?: 'TradeAttributes';
  percentBlock?: Maybe<Scalars['Float']['output']>;
  percentPenalty?: Maybe<Scalars['Float']['output']>;
  sealDate?: Maybe<Scalars['Float']['output']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _id?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imageUrls?: Maybe<Scalars['String']['output']>;
  meta?: Maybe<Meta>;
  paymentRef?: Maybe<Scalars['String']['output']>;
  paymentType?: Maybe<PaymentType>;
  quoteId?: Maybe<Scalars['ObjectID']['output']>;
  receiver?: Maybe<Receiver>;
  reference?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  stage?: Maybe<SwapStage>;
  status?: Maybe<Status>;
  transactionNo: Scalars['String']['output'];
};

export type TransactionFilter = {
  _id?: InputMaybe<Scalars['ObjectID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  quoteId?: InputMaybe<Scalars['ObjectID']['input']>;
  reference?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<SwapStage>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Status>;
};

export type TransactionInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<PaymentType>;
  payout?: InputMaybe<Scalars['Float']['input']>;
  quoteId?: InputMaybe<Scalars['ObjectID']['input']>;
  receiver?: InputMaybe<ReceiverInput>;
  sender?: InputMaybe<Scalars['String']['input']>;
  senderEmail?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<SwapStage>;
  status?: InputMaybe<Status>;
};

export type TransactionQuery = {
  page?: InputMaybe<PageInput>;
  query?: InputMaybe<TransactionFilter>;
};

export enum TransactionTypes {
  CancelWithdrawal = 'CANCEL_WITHDRAWAL',
  CreditDeposit = 'CREDIT_DEPOSIT',
  CreditIncomingPayment = 'CREDIT_INCOMING_PAYMENT',
  CreditPayment = 'CREDIT_PAYMENT',
  DebitOutgoingPayment = 'DEBIT_OUTGOING_PAYMENT',
  DebitPayment = 'DEBIT_PAYMENT',
  DebitWithdrawal = 'DEBIT_WITHDRAWAL',
  ExchangeBuy = 'EXCHANGE_BUY',
  ExchangeSell = 'EXCHANGE_SELL',
  Failed = 'FAILED'
}

export type Transactions = {
  __typename?: 'Transactions';
  data?: Maybe<Array<Maybe<Transaction>>>;
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

export type UpdateTransactionInput = {
  _id?: InputMaybe<Scalars['ObjectID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  paymentType?: InputMaybe<PaymentType>;
  payout?: InputMaybe<Scalars['Float']['input']>;
  receiver?: InputMaybe<ReceiverInput>;
  sender?: InputMaybe<Scalars['String']['input']>;
  stage?: InputMaybe<SwapStage>;
  status?: InputMaybe<Status>;
};

export type UploadReceiptInput = {
  _id?: InputMaybe<Scalars['ObjectID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  paymentRef?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneVerified?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
  verified?: Maybe<Scalars['String']['output']>;
  verifiedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserCredentialsInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UserFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyBank = {
  __typename?: 'VerifyBank';
  name: Scalars['String']['output'];
  number: Scalars['String']['output'];
};

export type VerifyBankInput = {
  bankCode: Scalars['String']['input'];
  number: Scalars['String']['input'];
};

export type Wallet = {
  __typename?: 'Wallet';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  accountCode?: Maybe<Scalars['String']['output']>;
  accountId?: Maybe<Scalars['String']['output']>;
  accountNumber?: Maybe<Scalars['String']['output']>;
  accountingCurrency?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Balance>;
  currency?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  frozen?: Maybe<Scalars['Boolean']['output']>;
  meta?: Maybe<Meta>;
  network?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type WalletFilter = {
  _id?: InputMaybe<Scalars['ObjectID']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type WalletInput = {
  currency: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type WalletTransaction = {
  __typename?: 'WalletTransaction';
  accountId?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  anonymous?: Maybe<Scalars['Boolean']['output']>;
  attr?: Maybe<Scalars['String']['output']>;
  counterAccountId?: Maybe<Scalars['String']['output']>;
  created: Scalars['Float']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  marketValue?: Maybe<MarketValue>;
  operationType?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  recipientNote?: Maybe<Scalars['String']['output']>;
  reference?: Maybe<Scalars['String']['output']>;
  senderNote?: Maybe<Scalars['String']['output']>;
  transactionCode?: Maybe<Scalars['String']['output']>;
  transactionType?: Maybe<Scalars['String']['output']>;
  txId?: Maybe<Scalars['String']['output']>;
};

export type WalletTransactionInput = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['Boolean']['input']>;
  currencies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['DateTime']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Wallets = {
  __typename?: 'Wallets';
  data?: Maybe<Array<Maybe<Wallet>>>;
  totalDocuments?: Maybe<Scalars['Int']['output']>;
};

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrenciesQuery = { __typename?: 'Query', getCurrencies?: Array<{ __typename?: 'CurrencyList', name?: string | null, network?: string | null } | null> | null };

export type GetCurrencyRateQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrencyRateQuery = { __typename?: 'Query', getCurrencyRate?: Array<{ __typename?: 'CmcRate', id?: number | null, name?: string | null, symbol?: string | null, market_cap?: number | null, price?: number | null, volume_24h?: number | null, percent_change_24h?: number | null, last_updated?: string | null, quote?: any | null } | null> | null };

export type GetBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksQuery = { __typename?: 'Query', getBanks?: Array<{ __typename?: 'Bank', id: number, code: string, name: string } | null> | null };

export type VerifyBankDetailsMutationVariables = Exact<{
  data?: InputMaybe<VerifyBankInput>;
}>;


export type VerifyBankDetailsMutation = { __typename?: 'Mutation', verifyBankDetails?: { __typename?: 'VerifyBank', number: string, name: string } | null };

export type GetQuoteQueryVariables = Exact<{
  query?: InputMaybe<SwapCurrencyInput>;
}>;


export type GetQuoteQuery = { __typename?: 'Query', getQuote?: { __typename?: 'Order', price?: string | null, _id?: string | null } | null };

export type SwapCurrencyMutationVariables = Exact<{
  data?: InputMaybe<Scalars['String']['input']>;
}>;


export type SwapCurrencyMutation = { __typename?: 'Mutation', swapCurrency?: { __typename?: 'OrderBook', id?: string | null } | null };

export type CreateTransactionMutationVariables = Exact<{
  data?: InputMaybe<TransactionInput>;
}>;


export type CreateTransactionMutation = { __typename?: 'Mutation', createTransaction?: { __typename?: 'Transaction', _id?: string | null, quoteId?: any | null, status?: Status | null } | null };

export type UploadReceiptMutationVariables = Exact<{
  data?: InputMaybe<UploadReceiptInput>;
}>;


export type UploadReceiptMutation = { __typename?: 'Mutation', uploadReceipt?: { __typename?: 'Transaction', _id?: string | null, status?: Status | null, paymentRef?: string | null, reference?: string | null } | null };

export type GetTransactionQueryVariables = Exact<{
  query?: InputMaybe<TransactionFilter>;
}>;


export type GetTransactionQuery = { __typename?: 'Query', getTransaction?: { __typename?: 'Transaction', _id?: string | null, status?: Status | null, date?: any | null, receiver?: { __typename?: 'Receiver', name?: string | null } | null } | null };

export type SendCurrencyOffChainMutationVariables = Exact<{
  data?: InputMaybe<SendCurrencyOffChainInput>;
}>;


export type SendCurrencyOffChainMutation = { __typename?: 'Mutation', sendCurrencyOffChain?: { __typename?: 'CurrencySentOffChain', reference?: string | null } | null };

export type GetWalletsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWalletsQuery = { __typename?: 'Query', getWallets?: Array<{ __typename?: 'Wallet', accountId?: string | null, customerId?: string | null, currency?: string | null, network?: string | null, rate?: string | null, balance?: { __typename?: 'Balance', fiatBalance: string, availableBalance: string } | null } | null> | null };

export type GetWalletDetailsQueryVariables = Exact<{
  accountId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetWalletDetailsQuery = { __typename?: 'Query', getWalletDetails?: { __typename?: 'Wallet', address?: string | null, currency?: string | null, rate?: string | null, network?: string | null, accountId?: string | null, customerId?: string | null, active?: boolean | null, frozen?: boolean | null, balance?: { __typename?: 'Balance', accountBalance: string, availableBalance: string, fiatBalance: string } | null } | null };

export type GetWalletTransactionsQueryVariables = Exact<{
  data?: InputMaybe<WalletTransactionInput>;
}>;


export type GetWalletTransactionsQuery = { __typename?: 'Query', getWalletTransactions?: Array<{ __typename?: 'WalletTransaction', accountId?: string | null, counterAccountId?: string | null, currency?: string | null, amount: number, anonymous?: boolean | null, created: number, operationType?: string | null, transactionType?: string | null, reference?: string | null, transactionCode?: string | null, senderNote?: string | null, recipientNote?: string | null, paymentId?: string | null, attr?: string | null, address?: string | null, txId?: string | null, marketValue?: { __typename?: 'MarketValue', amount?: number | null, currency?: string | null, sourceDate?: number | null, source?: string | null } | null } | null> | null };
