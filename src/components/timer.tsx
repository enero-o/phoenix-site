import { useEffect, useState } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

const Timer = ({ initialTime, onComplete, start, text }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            onComplete();
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [start]);

  useEffect(() => {
    if (!start) {
      setTimeLeft(initialTime);
    }
  }, [initialTime, start]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressValue = ((initialTime - timeLeft) / initialTime) * 100;

  return (
    <Stack width="100%" textAlign="center">
      <Box width="100%" height="5px" bg="gray.300" borderRadius="md" overflow="hidden">
        <Box height="100%" width={`${progressValue}%`} bg="#4CAF50" transition="width 1s linear" />
      </Box>

      <Text fontSize="sm" fontWeight="medium" color="black">
        {`${text}: `}
        <Text as="span" fontSize="md" fontWeight="bold">
          {!start ? "00:00" : formatTime(timeLeft)}
        </Text>
      </Text>
    </Stack>
  );
};

export default Timer;
