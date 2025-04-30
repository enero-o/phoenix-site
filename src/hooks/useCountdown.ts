import { useCallback, useEffect, useState } from 'react';

export const useCountdown = (initialTime, callback) => {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (callback) {
      callback();
    }
  }, [timer, callback]);

  const resetTimer = useCallback(() => setTimer(initialTime), [initialTime]);

  return { timer, resetTimer };
};
