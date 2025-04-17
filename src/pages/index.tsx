import { Box } from '@chakra-ui/react';

import Navbar from '@phx/components/navbar';
import { useCurrencyRate } from '@phx/hooks/currencies';

import About from './components/about';
import Faq from './components/faq';
import Footer from './components/footer';
import FooterSwap from './components/footerSwap';
import Header from './components/header';
import HowItWorks from './components/howItWorks';
import MarketUpdate from './components/marketUpdate';
import Testimonials from './components/testimonials';

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
      <Navbar />

      <Header tokenData={transformFilteredCurrency} />

      <HowItWorks />

      <Testimonials />

      <MarketUpdate tokenData={transformFilteredCurrency} filteredData={filteredCurrencyRate} />

      <About />

      <Faq />

      <FooterSwap />

      <Footer />
    </Box>
  );
};

export default Landing;
