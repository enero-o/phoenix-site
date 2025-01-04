import images from '@phx/images';

const loaded_data: Record<string, string> = {
  /** Default icons. */
  BTC: '/bitcoin.svg',
  ETH: '/ethereum.svg',
  AVA: '/avalanche.svg',
  NGX: '/naira.svg',
  USDT: '/usdt.svg',
  USDC: '/usdc.svg',
  TRON: images.tron,
  XRP: '/xrp.svg',
  BNB: '/bnb.svg',
  BSC: images.bsc,
  SOL: '/solana.svg',
  TON: images.tonCoin,
  DOGE: images.doge,
  CRYPTO_TRANSFER: '/bitcoin.svg',
  BANK_TRANSFER: '/bank.svg',
};

export default function useTokenIcon() {
  return (token: string) => loaded_data[String(token).toUpperCase()];
}
