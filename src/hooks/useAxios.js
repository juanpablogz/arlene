import { useState, useEffect } from 'react';
import axios from 'axios';
const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {

      const response = await axios.get(url);
      setIsLoading(false);
      console.log('request')
      setData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, isError, data };
};
export default useAxios;