import type { FC, ReactNode } from 'react';

import { HStack, Image, Text } from '@chakra-ui/react';

import images from '@phx/images';

interface ComponentProp {
  text?: ReactNode;
}

const Notice: FC<ComponentProp> = ({ text }) => {
  return (
    <HStack bg="orange.200" borderLeftColor="orange.300" borderBlock="none" borderInlineEnd="none" borderWidth="4px">
      <HStack m="3" alignItems="flex-start">
        <Image src={images.notice} />
        <Text color="orange.400">
          {text ? (
            text
          ) : (
            <>
              Notice~ When exchanging a small sum, transaction fees can take a large <br /> portion of the exchange
              volume due to high network fees. amount
            </>
          )}
        </Text>
      </HStack>
    </HStack>
  );
};

export default Notice;
