import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, initialState: any): Array<any> => {
  const storedVal = localStorage.getItem(key);
  const columns = storedVal ? JSON.parse(storedVal) : initialState;
  const [state, setState] = useState(columns);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;
