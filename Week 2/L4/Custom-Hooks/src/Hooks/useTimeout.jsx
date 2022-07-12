import { useEffect, useState } from "react";

export const useTimeout = (delay) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setReady(true);
    }, delay || 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return ready;
};
