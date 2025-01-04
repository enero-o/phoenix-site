export interface BankData {
  getBanks: GetBank[];
}

export interface GetBank {
  id: number;
  code: string;
  name: string;
}

export interface VerifyAccountData {
  verifyBankDetails: VerifyBankDetails;
}

interface VerifyBankDetails {
  number: string;
  name: string;
}