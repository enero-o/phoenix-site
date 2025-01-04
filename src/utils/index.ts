import images from '@phx/images';
import routes from '@phx/routes';

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
    ? U
    : T extends Promise<infer U>
      ? U
      : T;

export function searchFilter<A extends Array<any>, T extends Unpacked<A>>(
  search: string,
  data: A,
  filter: (obj: T) => string,
) {
  if (!search) return data;
  return data?.filter((obj) => filter(obj)?.toLowerCase()?.includes(search?.toLowerCase())) as A;
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatLargeNumber = (number: number) => {
  if (number >= 1e12) {
    return `$${(number / 1e12).toFixed(3)}T`;
  } else if (number >= 1e9) {
    return `$${(number / 1e9).toFixed(3)}B`;
  } else if (number >= 1e6) {
    return `$${(number / 1e6).toFixed(3)}M`;
  } else {
    return `${currencyFormatter.format(number)}`;
  }
};

export function info(currency = 'BTC') {
  return [
    { id: 1, title: 'Send', icon: images.sendIcon, to: `${routes.main.send}?currency=${currency}` },
    { id: 2, title: 'Receive', icon: images.receiveIcon, to: `${routes.main.receive}?currency=${currency}` },
    { id: 3, title: 'Swap', icon: images.tDesignSwapVert, to: `${routes.main.swap}?currency=${currency}` },
    // { id: 4, title: 'Withdraw', icon: images.withdrawalIcon, to: routes.main.withdrawal },
  ];
}

export const replaceUnderscoreWithSpace = (str: string): string => {
  return str.replace(/_/g, ' ');
};

export const hideMiddle = (address, startLength = 7, endLength = 7) => {
  if (address.length <= startLength + endLength) return address;

  const start = address.slice(0, startLength);

  const end = address.slice(-endLength);

  return `${start}...${end}`;
};
