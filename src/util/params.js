import { useState, useEffect } from 'react';

const useParams = () => {
  const [params, setParams] = useState({});

  useEffect(
    () => {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        searchParams.set(key, params[key]);
      });
      const queryString = searchParams.toString();
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}${
          queryString ? `?${searchParams.toString()}` : ''
        }`
      );
    },
    [params]
  );

  return [params, setParams];
};

export default useParams;
