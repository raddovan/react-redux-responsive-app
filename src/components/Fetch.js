import { useState, useEffect } from "react";

function useFetch(url, opts) {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log("fetching..");

    fetch(url, opts)
      .then((response) => response.json())
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return response;
}

export default useFetch;
