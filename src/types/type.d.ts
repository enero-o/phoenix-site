export interface StepData {
  title: string;
  description: string;
}

interface GetRateResponse {
  // eslint-disable-next-line no-undef
  data: Data;
}

interface GetRateData {
  getRate: GetRate;
}

interface GetRate {
  previousRate: null;
  baseCurrency: string;
  quoteCurrency: string;
  _id: string;
  rate: number;
}

interface SwapDetails {
  baseCurrency: string;
  quoteCurrency: string;
  rate: number;
  sending: string;
  receiving: number;
  quoteId: string;
  payout: number;
  amount: number;
}

interface ReceiverDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  bankName: string;
  accountNumber: string;
}

interface TransactionResponse {
  data: TransactionData;
}

interface TransactionData {
  getTransaction: GetTransaction;
}

interface GetTransaction {
  _id: string;
  status: string;
  receiver: Receiver;
  quote: Quote;
  date: string;
}

interface Quote {
  rate: null;
  amount: number;
}

interface Receiver {
  name: string;
}

interface CurrencyResponse {
  data: CurrencyData;
}

interface CurrencyData {
  getCurrencies: GetCurrency[];
}

interface GetCurrency {
  _id: string;
  name: string;
  network: string;
}

interface WalletsDetailsData {
  getUserWalletsDetails: GetUserWalletsDetail[];
}

interface GetUserWalletsDetail {
  accountId: string;
  id: string;
  balance: Balance;
  currency: string;
  rate: string;
  network: string;
  customerId: string;
}

interface Balance {
  fiatBalance: string;
  availableBalance: string;
}

interface BankResponse {
  data: BankData;
}

interface BankData {
  getBanks: GetBank[];
}

interface GetBank {
  id: number;
  code: string;
  name: string;
}

interface TransferType {
  id: string;
  type: string;
}

interface WalletTransactionsData {
  accountId: string;
  address: string;
  amount: number;
  created: number;
  currency: string;
  operationType: string;
  reference: string;
}
