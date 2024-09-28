import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogsSection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;

  h3 {
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1024px) { 
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) { 
      grid-template-columns: 1fr;
    }
  }
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
  }

  .category {
    background-color: #6c63ff;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 10px;
    font-weight: bold;
    text-align: center;
  }

  h4 {
    margin: 10px;
    font-size: 1.2rem;
  }

  .writer_section {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .author {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  .published-date, .reading-time {
    margin: 10px;
    font-size: 0.9rem;
    color: #777;
  }
`;

const LatestBlogs = ({ heading, newClass, blogs }) => {
  return (
    <BlogsSection>
      <h3>{heading ? heading : "All blogs"}</h3>
      <div className="container">
        {blogs && blogs.map((element) => (
          <BlogCard to={`/blog/${element.id}`} key={element.id}>
            <img src={element.image} alt={element.title} />
            <span className="category">{element.category}</span>
            <h4>{element.title}</h4>
            <div className="writer_section">
              <div className="author">
                <img src={element.authorPic} alt={element.author} />
                <p>{element.author}</p>
              </div>
            </div>
            <p className="published-date">{element.published_date}</p>
            <p className="reading-time">{element.reading_time}</p>
          </BlogCard>
        ))}
      </div>
    </BlogsSection>
  );
};

export default LatestBlogs;
