import { useRef } from 'react';

export const useDebounce = (callback: () => void, delay: number) => {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunction = () => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      callback();
    }, delay);
  };

  return debouncedFunction;
};
