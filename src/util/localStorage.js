import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialState) => {
  const storedVal = localStorage.getItem(key);
  const columns = storedVal ? JSON.parse(storedVal) : initialState;
  const [state, setState] = useState(columns);

  useEffect(
    () => {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state]
  );

  return [state, setState];
};

export default useLocalStorage;
