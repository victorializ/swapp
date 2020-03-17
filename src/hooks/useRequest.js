import { useState, useEffect } from 'react';
import { get as axiousGet, BASEURL } from '../services/http-client';

const useRequest = (initialUrl, initialState = [], get = axiousGet) => {

  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let next = `${BASEURL}${initialUrl}/?format=json`;
        let result = [];
        while(next !== null) {
          const { data } = await get(next);
          next = data?.next;
          result = [...result, ...data?.results];
          setData(result);
        }
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    if(!initialState.length) {
      fetchData();
    }
  }, [initialState.length, initialUrl, get]);
  return [ data, loading, error ];
};

export { useRequest };