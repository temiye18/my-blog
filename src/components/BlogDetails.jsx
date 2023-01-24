import React from "react";
import { useParams, Link } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import useFetch from "../hooks/useFetch";
import classes from "./BlogDetails.module.css";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = useFetch("getEntry", slug, {});
  //   console.log(blog);

  const blogDate = new Date(blog?.fields?.date).toDateString();
  return (
    <main>
      <div className="container">
        <Link to="/" className={classes["back-link"]}>
          Go Back
        </Link>
        <div className={classes["blog-meta"]}>
          <h3>{blog?.fields?.blogTitle}</h3>
          <p>{blog?.fields?.author}</p>
          <p>{blog?.fields?.date && blogDate}</p>
          <p>{blog?.fields?.timeToRead}</p>
        </div>

        <div className={classes["blog-content"]}>
          <div className={classes["blog-image"]}>
            <img
              src={blog?.fields?.blogImage.fields.file.url}
              alt={blog?.fields?.blogTitle}
            />
          </div>

          <div>{documentToReactComponents(blog?.fields?.content)}</div>
        </div>
        <div className={classes["blog-author-info"]}>
          <img
            src={blog?.fields?.authurImage.fields.file.url}
            alt={blog?.fields?.author}
          />
          <p>{blog?.fields?.author}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDetails;
