import { Image } from '@chakra-ui/react';

import images from '@lyte/images';

const Logo = () => <Image src={images.icon} alt="lyte" h={{ base: '8', md: '8' }} w="auto" />;

export default Logo;
