import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../data/apiUrls";



export const useApiHooks = (url, queryParams) => {


  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get(`${baseUrl}/${url}`, {
        params: queryParams
      });
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return [data, load, error];



}