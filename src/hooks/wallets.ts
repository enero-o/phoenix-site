import { useQuery } from '@apollo/client';

import { GET_WALLETS, GET_WALLET_DETAILS } from '@phx/gql/queries/wallet';
import { userVar } from '@phx/utils/storage';

export const useWallets = () => {
  const user = userVar();

  return useQuery<any>(GET_WALLETS, {
    skip: !user?.jwtToken,
  });
};

export const useWalletDetails = (accountId: string) => {
  return useQuery<any>(GET_WALLET_DETAILS, {
    variables: { accountId },
    skip: !accountId,
  });
};
