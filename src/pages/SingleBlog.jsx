import React, { useEffect, useState } from "react";
import { blogs } from "../blogs.json";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SingleBlogContainer = styled.article`
  padding: 20px;
  background-color: ${({ mode }) => (mode === "dark" ? "#2c2c2c" : "#ffffff")};
  color: ${({ mode }) => (mode === "dark" ? "#ffffff" : "#000000")};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 130px auto;

  .category {
    font-size: 0.9rem;
    font-weight: bold;
    color: #007bff;
  }

  h1 {
    font-size: 2.5rem;
    margin: 20px 0;
  }

  .writer_section {
    display: flex;
    align-items: center;
    margin: 20px 0;

    .author {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      p {
        font-weight: bold;
      }
    }
  }

  .mainImg {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 20px 0;
  }

  .intro-text {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 20px 0;
  }

  .sub-para {
    margin-top: 30px;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    p {
      margin: 5px 0;
    }
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    padding: 15px;

    h1 {
      font-size: 2rem;
    }

    .intro-text {
      font-size: 1rem;
    }

    .sub-para h3 {
      font-size: 1.2rem;
    }

    .sub-para p {
      font-size: 0.9rem;
    }
  }
`;

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const foundBlog = blogs.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id]);

  return (
    <SingleBlogContainer mode={mode}>
      {blog ? (
        <section className="container">
          <div className="category">{blog.category}</div>
          <h1>{blog.title}</h1>
          <div className="writer_section">
            <div className="author">
              <img src={blog.authorPic} alt={blog.author} />
              <p>{blog.author}</p>
            </div>
          </div>
          {blog.image && (
            <img src={blog.image} alt="mainBlogImg" className="mainImg" />
          )}
          <p className="intro-text">{blog.content}</p>
          <div className="sub-para">
            <h3>More Details</h3>
            <p>Published on: {blog.published_date}</p>
            <p>Reading Time: {blog.reading_time}</p>
            <p>Tags: {blog.tags.join(", ")}</p>
          </div>
        </section>
      ) : (
        <p>Blog not found.</p>
      )}
    </SingleBlogContainer>
  );
};

export default SingleBlog;
