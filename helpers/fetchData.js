// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

const key = "e0e6bc3e4f76bd0cee424878945e0461";

// api example
// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}

// const useFetch = ({ url, options, processor }) => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch({ type: "SEARCHING", payload: true });
//     if (url) {
//       const fetchData = async () => {
//         try {
//           const api = `${url}&APPID=${key}`;
//           const res = await fetch(api, options);
//           const json = await res.json();
//           const processed = await processor(json);
//           setResponse(processed);
//           setError(null);
//         } catch (err) {
//           setError(err);
//           setResponse(null);
//         }
//         dispatch({ type: "SEARCHING", payload: false });
//       };
//       fetchData();
//     }
//   }, [url]);

//   return { response, error };
// };

const fetchData = async (url, options, processor) => {
  try {
    const api = `${url}&APPID=${key}`;
    const res = await fetch(api, options);
    const json = await res.json();
    const processed = await processor(json);
    return processed;
  } catch (err) {
    return err;
  }
};

export default fetchData;
