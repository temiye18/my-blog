import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const useFetch = (entryType, id = "", initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        await client[entryType](id).then((entries) => {
          //   console.log("enteries", entries);
          setData(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [entryType, id]);

  return data;
};

export default useFetch;
