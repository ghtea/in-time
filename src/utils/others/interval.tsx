import React, { useEffect, useRef } from 'react';

type Callback = () => void

export const useInterval = (callback: Callback, delay: number | null = null) => {
  const savedCallback = useRef<Callback>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const newCallback = () => {
      if (savedCallback){
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const intervalId = setInterval(newCallback, delay);
      return () => clearInterval(intervalId);
    }
  }, [delay]);
}