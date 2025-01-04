import React, { useEffect, useState } from 'react';

import { Box, Flex, HStack, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => {
  const [current, setCurrent] = useState<number>(0);
  const [length, setLength] = useState(React.Children.count(children));
  const itemsPerView = useBreakpointValue({ base: 1, md: 3, lg: 3 }) as number;

  useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

  const prev = () => {
    if (current > 0) {
      setCurrent((prevState) => prevState - 1);
    }
  };

  const next = () => {
    if (current < length - itemsPerView) {
      setCurrent((prevState) => prevState + 1);
    }
  };

  const baseWidth = useBreakpointValue({
    base: '100%',
    md: 'calc((100% - 6%) / 3)',
    lg: 'calc((100% - 6%) / 3)',
  });

  const leftBtnIsDisabled = current === 0;
  const rightBtnIsDisabled = current >= length - itemsPerView;
  
  return (
    <Flex flexDir="column" alignItems="center" gap="10" justifyContent="space-between">
      <Box width="100%" overflow="hidden">
        <Flex
          gap="4"
          transition="transform 0.5s ease-in-out"
          transform={`translateX(-${(current / itemsPerView) * 103}%)`}
          pb='6'
        >
          {React.Children.map(children, (child) => (
            <Box width={baseWidth} minWidth={baseWidth}>
              {child}
            </Box>
          ))}
        </Flex>
      </Box>

      <HStack gap="4">
        <IconButton
          isDisabled={leftBtnIsDisabled}
          icon={<ArrowLeft />}
          aria-label="Previous"
          onClick={prev}
          _hover={{ opacity: !leftBtnIsDisabled && 0.8 }}
          _active={{ bgColor: !leftBtnIsDisabled && 'gray.100' }}
          h="16"
          w="16"
          bgColor="gray.50"
          borderRadius="full"
          variant="ghost"
        />{' '}
        <IconButton
          icon={<ArrowRight />}
          aria-label="Next"
          onClick={next}
          h="16"
          w="16"
          bgColor="gray.50"
          _active={{ bgColor: !rightBtnIsDisabled && 'gray.100' }}
          borderRadius="full"
          _hover={{ opacity: !rightBtnIsDisabled && 0.8 }}
          variant="ghost"
          isDisabled={rightBtnIsDisabled}
        />
      </HStack>
    </Flex>
  );
};

export default Carousel;
