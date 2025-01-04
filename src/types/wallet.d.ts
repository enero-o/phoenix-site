// interface RootObject {
//   data: WalletData;
// }

interface BtcWalletData {
  getBtcWallet: GetBtcWallet;
}

interface GetBtcWallet {
  _id: string;
  accountId: string;
  userId: string;
  address: string;
  meta: Meta;
}

interface EthWalletData {
  getEthWallet: GetEthWallet;
}

interface GetEthWallet {
  _id: string;
  userId: string;
  accountId: string;
  address: string;
  meta: Meta;
}

interface Meta {
  active: boolean;
  createdAt: string;
}

interface GetWalletAccountDetailsData {
  getWalletAccountDetails: GetWalletAccountDetails;
}

interface GetWalletAccountDetails {
  balance: Balance;
  currency: string;
  address: string;
  network: string;
  rate: string;
  accountNumber: null;
  accountCode: null;
  accountingCurrency: string;
  customerId: string;
  active: boolean;
  id: string;
  frozen: boolean;
}

interface Balance {
  accountBalance: string;
  availableBalance: string;
  fiatBalance: string;
}
