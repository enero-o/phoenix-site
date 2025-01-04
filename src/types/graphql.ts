/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** Banking account number is a string of 5 to 17 alphanumeric values for representing an generic account number */
  AccountNumber: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: any; output: any; }
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: { input: any; output: any; }
  /** A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down */
  Cuid: { input: any; output: any; }
  /** A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217. */
  Currency: { input: any; output: any; }
  /** A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/. */
  DID: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  Duration: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  GUID: { input: any; output: any; }
  /** A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSL: { input: any; output: any; }
  /** A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla(). */
  HSLA: { input: any; output: any; }
  /** A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors. */
  HexColorCode: { input: any; output: any; }
  /** A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal. */
  Hexadecimal: { input: any; output: any; }
  /** A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number. */
  IBAN: { input: any; output: any; }
  /** A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address. */
  IP: { input: any; output: any; }
  /** A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4. */
  IPv4: { input: any; output: any; }
  /** A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6. */
  IPv6: { input: any; output: any; }
  /** A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number. */
  ISBN: { input: any; output: any; }
  /**
   *
   *     A string representing a duration conforming to the ISO8601 standard,
   *     such as: P1W1DT13H23M34S
   *     P is the duration designator (for period) placed at the start of the duration representation.
   *     Y is the year designator that follows the value for the number of years.
   *     M is the month designator that follows the value for the number of months.
   *     W is the week designator that follows the value for the number of weeks.
   *     D is the day designator that follows the value for the number of days.
   *     T is the time designator that precedes the time components of the representation.
   *     H is the hour designator that follows the value for the number of hours.
   *     M is the minute designator that follows the value for the number of minutes.
   *     S is the second designator that follows the value for the number of seconds.
   *
   *     Note the time designator, T, that precedes the time value.
   *
   *     Matches moment.js, Luxon and DateFns implementations
   *     ,/. is valid for decimal places and +/- is a valid prefix
   *
   */
  ISO8601Duration: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
  /** A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction. */
  JWT: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude */
  Latitude: { input: any; output: any; }
  /** A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`. */
  LocalDate: { input: any; output: any; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block. */
  LocalEndTime: { input: any; output: any; }
  /** A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`. */
  LocalTime: { input: any; output: any; }
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: any; output: any; }
  /** A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude */
  Longitude: { input: any; output: any; }
  /** A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address. */
  MAC: { input: any; output: any; }
  /** Floats that will have a value less than 0. */
  NegativeFloat: { input: any; output: any; }
  /** Integers that will have a value less than 0. */
  NegativeInt: { input: any; output: any; }
  /** A string that cannot be passed as an empty value */
  NonEmptyString: { input: any; output: any; }
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: { input: any; output: any; }
  /** Floats that will have a value of 0 or less. */
  NonPositiveFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or less. */
  NonPositiveInt: { input: any; output: any; }
  /** A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c */
  ObjectID: { input: any; output: any; }
  /** A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234. */
  PhoneNumber: { input: any; output: any; }
  /** A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports */
  Port: { input: any; output: any; }
  /** Floats that will have a value greater than 0. */
  PositiveFloat: { input: any; output: any; }
  /** Integers that will have a value greater than 0. */
  PositiveInt: { input: any; output: any; }
  /** A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg. */
  PostalCode: { input: any; output: any; }
  /** A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGB: { input: any; output: any; }
  /** A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba(). */
  RGBA: { input: any; output: any; }
  /** In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit code to identify the financial institution. */
  RoutingNumber: { input: any; output: any; }
  /** The `SafeInt` scalar type represents non-fractional signed whole numeric values that are considered safe as defined by the ECMAScript specification. */
  SafeInt: { input: any; output: any; }
  /** A field whose value is a Semantic Version: https://semver.org */
  SemVer: { input: any; output: any; }
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: { input: any; output: any; }
  /** A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones */
  TimeZone: { input: any; output: any; }
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: any; output: any; }
  /** A currency string, such as $21.25 */
  USCurrency: { input: any; output: any; }
  /** A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier. */
  UUID: { input: any; output: any; }
  /** Floats that will have a value of 0 or more. */
  UnsignedFloat: { input: any; output: any; }
  /** Integers that will have a value of 0 or more. */
  UnsignedInt: { input: any; output: any; }
  /** A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones */
  UtcOffset: { input: any; output: any; }
  /** Represents NULL values */
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


export const GetCurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"network"}}]}}]}}]} as unknown as DocumentNode<GetCurrenciesQuery, GetCurrenciesQueryVariables>;
export const GetCurrencyRateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrencyRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrencyRate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"market_cap"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"volume_24h"}},{"kind":"Field","name":{"kind":"Name","value":"percent_change_24h"}},{"kind":"Field","name":{"kind":"Name","value":"last_updated"}},{"kind":"Field","name":{"kind":"Name","value":"quote"}}]}}]}}]} as unknown as DocumentNode<GetCurrencyRateQuery, GetCurrencyRateQueryVariables>;
export const GetBanksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBanks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetBanksQuery, GetBanksQueryVariables>;
export const VerifyBankDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyBankDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyBankInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyBankDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<VerifyBankDetailsMutation, VerifyBankDetailsMutationVariables>;
export const GetQuoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getQuote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SwapCurrencyInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getQuote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<GetQuoteQuery, GetQuoteQueryVariables>;
export const SwapCurrencyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwapCurrency"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"swapCurrency"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"quoteId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SwapCurrencyMutation, SwapCurrencyMutationVariables>;
export const CreateTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"quoteId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<CreateTransactionMutation, CreateTransactionMutationVariables>;
export const UploadReceiptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadReceipt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadReceiptInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadReceipt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"paymentRef"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}}]}}]}}]} as unknown as DocumentNode<UploadReceiptMutation, UploadReceiptMutationVariables>;
export const GetTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TransactionFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]}}]} as unknown as DocumentNode<GetTransactionQuery, GetTransactionQueryVariables>;
export const SendCurrencyOffChainDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendCurrencyOffChain"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SendCurrencyOffChainInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendCurrencyOffChain"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reference"}}]}}]}}]} as unknown as DocumentNode<SendCurrencyOffChainMutation, SendCurrencyOffChainMutationVariables>;
export const GetWalletsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWallets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fiatBalance"}},{"kind":"Field","name":{"kind":"Name","value":"availableBalance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}}]}}]}}]} as unknown as DocumentNode<GetWalletsQuery, GetWalletsQueryVariables>;
export const GetWalletDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWalletDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWalletDetails"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"accountId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"balance"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountBalance"}},{"kind":"Field","name":{"kind":"Name","value":"availableBalance"}},{"kind":"Field","name":{"kind":"Name","value":"fiatBalance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"rate"}},{"kind":"Field","name":{"kind":"Name","value":"network"}},{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"frozen"}}]}}]}}]} as unknown as DocumentNode<GetWalletDetailsQuery, GetWalletDetailsQueryVariables>;
export const GetWalletTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWalletTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WalletTransactionInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWalletTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountId"}},{"kind":"Field","name":{"kind":"Name","value":"counterAccountId"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"anonymous"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"marketValue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"sourceDate"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}},{"kind":"Field","name":{"kind":"Name","value":"operationType"}},{"kind":"Field","name":{"kind":"Name","value":"transactionType"}},{"kind":"Field","name":{"kind":"Name","value":"reference"}},{"kind":"Field","name":{"kind":"Name","value":"transactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"senderNote"}},{"kind":"Field","name":{"kind":"Name","value":"recipientNote"}},{"kind":"Field","name":{"kind":"Name","value":"paymentId"}},{"kind":"Field","name":{"kind":"Name","value":"attr"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"txId"}}]}}]}}]} as unknown as DocumentNode<GetWalletTransactionsQuery, GetWalletTransactionsQueryVariables>;