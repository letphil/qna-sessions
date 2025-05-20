import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay = 300) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedVal;
}
