import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

import classes from "./BlogList.module.css";

const BlogList = () => {
  const data = useFetch("getEntries", []) || [];
  //   console.log(data);

  return (
    <section className={classes["blog-section"]}>
      <div className="container">
        {data?.items?.map((blog) => {
          return (
            <div className={classes["blog-card"]} key={blog.sys.id}>
              <div className={classes["blog-image"]}>
                <img
                  src={blog.fields.blogImage.fields.file.url}
                  alt={blog.fields.blogTitle}
                />
              </div>
              <h3 className={classes["blog-title"]}>{blog.fields.blogTitle}</h3>
              <p className={classes["blog-snippet"]}>{blog.fields.snippet}</p>
              <div className={classes["date-read-more"]}>
                <p className={classes["blog-date"]}>
                  {new Date(blog.fields.date).toDateString()}
                </p>

                <Link
                  to={`/blog/${blog.sys.id}`}
                  className={classes["blog-link"]}
                >
                  Read More
                </Link>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogList;
