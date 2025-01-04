import type { FC, PropsWithChildren } from 'react';

import { Td } from '@chakra-ui/react';

const TdCustom: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Td color="brand.100" fontSize="md">
      {children}
    </Td>
  );
};

export default TdCustom;
