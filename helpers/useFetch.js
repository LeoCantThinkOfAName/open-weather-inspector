import { useState, useEffect } from "react";

const key = "e0e6bc3e4f76bd0cee424878945e0461";

// api example
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

const useFetch = ({ url, options, processor }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const api = `${url}&APPID=${key}`;
        const res = await fetch(api, options);
        const json = await res.json();
        const processed = await processor(json);
        setResponse(processed);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, loading };
};

export default useFetch;
