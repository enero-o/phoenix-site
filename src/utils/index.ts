import { Coin } from 'coin-format';

import { getTokenName } from '@lyte/hooks/useTokenIcon';

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

export const replaceUnderscoreWithSpace = (str: string): string => {
  return str.replace(/_/g, ' ');
};

export const hideMiddle = (address, startLength = 7, endLength = 7) => {
  if (address.length <= startLength + endLength) return address;

  const start = address.slice(0, startLength);

  const end = address.slice(-endLength);

  return `${start}...${end}`;
};

export const fmtError = (err: string) => {
  switch (err) {
    case 'UserLambdaValidationException':
      return 'Email is in use, please try another email.';
    case 'InvalidParameterException':
      return 'Invalid email or password.';
    case 'UsernameExistsException':
      return 'Email is in use, please login.';
    case 'swap.failed':
      return 'Could not perform swap, please try again.';
    default:
      return 'An error occurred, please retry.';
  }
};

export const openInNewTab = (path) => {
  // Construct the full URL or relative path
  const url = path; // e.g., "/some-route"
  window.open(url, '_blank', 'noopener,noreferrer');
};

export function truncateValue(num, currency, showCurrency = true) {
  if (num && currency) {
    const coin = Coin(getTokenName(currency));
    if (showCurrency) {
      return coin.formatNice(num);
    } else {
      return coin.formatMetric(num);
    }
  } else {
    return num;
  }
}

export const getLimits = (currency) => {
  switch (currency) {
    case 'BTC':
      return {
        min: 0.0001,
        max: 0.5,
      };
    case 'ETH':
      return {
        min: 0.001,
        max: 10,
      };
    case 'USDT':
      return {
        min: 1,
        max: 50000,
      };
    case 'BNB':
      return {
        min: 0.1,
        max: 100,
      };
    case 'VC_NGX':
      return {
        min: 1000,
        max: 100000000,
      };
    case 'TRX':
      return {
        min: 1,
        max: 15000,
      };
    case 'TRON':
      return {
        min: 1,
        max: 15000,
      };
    case 'LTC':
      return {
        min: 0.01,
        max: 20,
      };
    case 'DOGE':
      return {
        min: 1,
        max: 15000,
      };
    default:
      return {
        min: 0,
        max: 100,
      };
  }
};
