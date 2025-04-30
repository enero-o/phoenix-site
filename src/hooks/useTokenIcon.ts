import images from '@lyte/images';

const loaded_data: Record<string, string> = {
  /** Default icons. */
  AVA: images.avalanche,
  // BCH: images.bch,
  BNB: images.bnb,
  BSC: images.bnb,
  BTC: images.bitcoin,
  DOGE: images.doge,
  ETH: images.ethereum,
  // LTC: images.ltc,
  // MATIC: images.matic,
  VC_NGX: images.naira,
  NGX: images.naira,
  NGN: images.naira,
  SOL: images.solana,
  TON: images.tonCoin,
  TRON: images.tron,
  TRX: images.tron,
  USDC: images.usdcIcon,
  USDT: images.usdtIcon,
  USDT_TRON: images.usdtIcon,
  // XLM: images.xlm,
  XRP: images.xrp,
  CRYPTO_TRANSFER: '/bitcoin.svg',
  BANK_TRANSFER: '/bank.svg',
};

export default function useTokenIcon() {
  return (token: string) => loaded_data[String(token).toUpperCase()];
}

export function getTokenName(token: string) {
  switch (token) {
    case 'USDT_TRON':
      return 'USDT';
    case 'TRON':
      return 'TRX';
    case 'VC_NGX':
      return 'NGX';
    case 'BSC':
      return 'BNB';
    default:
      return token;
  }
}

export function getTokenNetwork(token: string) {
  const tron = {
    name: 'TRON',
    contract: 'TRC20',
  };

  const eth = {
    name: 'ETH',
    contract: 'ERC20',
  };

  const btc = {
    name: 'BTC',
    contract: 'Bitcoin',
  };

  const bsc = {
    name: 'BNB',
    contract: 'BEP20',
  };

  switch (token) {
    case 'USDT_TRON':
      return tron;
    case 'TRON':
      return tron;
    case 'USDC':
      return eth;
    case 'ETH':
      return eth;
    case 'BTC':
      return btc;
    case 'BSC':
      return bsc;
    case 'LTC':
      return {
        name: 'LTC',
        contract: 'Litecoin',
      };
    case 'DOGE':
      return {
        name: 'DOGE',
        contract: 'Dogecoin',
      };
    case 'MATIC':
      return eth;
    case 'VC_NGX':
      return {
        name: 'NGX',
        contract: '',
      };
    case 'XRP':
      return {
        name: 'XRP',
        contract: '',
      };
    case 'XLM':
      return {
        name: 'XLM',
        contract: '',
      };
    default:
      return {
        name: token,
        contract: '',
      };
  }
}
