import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
    const [dataTmp, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsErr] = useState(false);

    const ourRequest = axios.CancelToken.source(); 
    useEffect(() => {
      setTimeout(async () => {
          fetchData(url);
      }, 2000);
  }, [url]);
  
    async function fetchData(url) {
      try{
        let response = await axios(url, {
          cancelToken: ourRequest.token
        });
        let data = response && response.data ? response.data: [];
        console.log(response.data);
        setData(data);
        setLoading(false);
        setIsErr(false);
      }
      catch(e){
        if (axios.isCancel(e)){
          console.log('Request canceled', e.message);
        }
        else {
          setLoading(false);
          setIsErr(true);
        }
      }
      return () => {
        ourRequest.cancel('Operation canceled by the user');
      }
    }

    return{
        dataTmp, isError, isLoading
    }
}
export default useFetch;