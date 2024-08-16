import axios from 'axios';
import { useState } from 'react';
const useApi = (initialValue:any) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const getData = async (url:string) => {
    setLoading(true);
    try {
      const response = await axios(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (url:string, body:any) => {
    setLoading(true);
    try {
      const response = await axios.post(url, body);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const putData = async (url:string, body:any) => {
    setLoading(true);
    try {
      const response = await axios.put(url, body);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteData = async (url:string) => {
    setLoading(true);
    try {
      const response = await axios.delete(url);
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };


  return { data,getData,postData,putData,deleteData, loading, error };
};

export default useApi;