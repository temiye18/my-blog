import { useState, useEffect } from "react";

const useFetch = (entryType) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);

  return data;
};

export default useFetch;
