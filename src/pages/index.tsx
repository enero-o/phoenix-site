import { Box } from '@chakra-ui/react';

import { useCurrencyRate } from '@lyte/hooks/currencies';

import Footer from '../partials/footer';
import Header from '../partials/header';
import HowItWorks from '../partials/howItWorks';

const Landing = () => {
  const { data } = useCurrencyRate();

  const symbols = ['ETH', 'TON', 'USDT', 'BTC'];

  const currencyRate = data?.getCurrencyRate ?? [];
  const filteredCurrencyRate = currencyRate?.filter((item) => symbols.includes(item?.symbol));

  const transformFilteredCurrency = filteredCurrencyRate?.map((token) => {
    const { quote } = token;

    return {
      name: token?.symbol,
      fullName: token?.name,
      currentPrice: token?.price,
      percentChange: quote?.USD?.percent_change_1h,
      data: [
        { name: '1h', value: quote?.USD?.percent_change_1h },
        { name: '24h', value: quote?.USD?.percent_change_24h },
        { name: '7d', value: quote?.USD?.percent_change_7d },
        { name: '30d', value: quote?.USD?.percent_change_30d },
        { name: '60d', value: quote?.USD?.percent_change_60d },
        { name: '90d', value: quote?.USD?.percent_change_90d },
      ],
    };
  });

  return (
    <Box>
      <Header />

      <HowItWorks />

      {/* <Testimonials /> */}

      {/* <MarketUpdate tokenData={transformFilteredCurrency} filteredData={filteredCurrencyRate} /> */}

      {/* <About /> */}

      {/* <Faq /> */}

      {/* <FooterSwap /> */}
      {/* <TokenInfo tokenData={transformFilteredCurrency} /> */}

      <Footer />
    </Box>
  );
};

export default Landing;
