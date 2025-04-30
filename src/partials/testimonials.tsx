import { Box, Text } from '@chakra-ui/react';

import Carousel from '@lyte/components/carousel';
import TestimonialCard from '@lyte/components/testimonialCard';

const comments = [
  {
    name: 'Jesse David',
    message: 'It was the fastest transaction I have ever experienced.',
    occupation: 'UX Designer',
    colorScheme: 'orange.100',
  },
  {
    name: 'Victor Akerele',
    message: 'Lyte saved me from embarrasment. Thank you.',
    occupation: 'Software Engineer',
    colorScheme: 'blue.200',
  },
  {
    name: 'Jesse David',
    message: 'I love that I can always rely on Lyte',
    occupation: 'UX Designer',
    colorScheme: 'green.600',
  },
  {
    name: 'Victor Akerele',
    message: 'Lyte saved me from embarrasment. Thank you.',
    occupation: 'Software Engineer',
    colorScheme: 'orange.100',
  },
  {
    name: 'Jesse David',
    message: 'I love that I can always rely on Lyte',
    occupation: 'UX Designer',
    colorScheme: 'blue.200',
  },
  {
    name: 'Victor Akerele',
    message: 'Lyte saved me from embarrasment. Thank you.',
    occupation: 'UX Designer',
    colorScheme: 'green.600',
  },
];

const Testimonials = () => {
  return (
    <Box mt={{ md: '36' }} pt="10" pb="20" px={{ base: '6', lg: '24' }} bgColor="white.200" position="relative">
      <Text fontSize={{ base: 'lg', md: 'xl' }} textAlign="center" letterSpacing="-1px">
        Trusted by over 10 thousand users worldwide
      </Text>

      <Box px={{ base: '0', md: '20', xl: '100' }} pt="2" pb={{ base: '10', md: '20' }}>
        <Text fontSize={{ base: 'xl', md: '5xl' }} textAlign="center" lineHeight="1" fontWeight="semibold">
          Here Is What People <br /> Are Saying About Us
        </Text>
      </Box>

      <Carousel>
        {comments.map((comment, index) => (
          <TestimonialCard key={index} {...comment} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Testimonials;
