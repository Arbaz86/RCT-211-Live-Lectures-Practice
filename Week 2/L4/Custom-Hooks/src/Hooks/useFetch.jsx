import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setData(data.items);
        setLoading(false);
        setError(false);
        console.log(data.items);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
