import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import {blogs} from "../blogs.json"

const TrendingBlogs = () => {
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 4,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 3,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 2,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="trending">
      <h3>Trending</h3>
      <Carousel responsive={responsive}>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 6).map((element) => {
            return (
              <Link to={`/blog/${element.id}`} className="card" key={element.id}>
                <img
                  src={element.image}
                  alt={element.title}
                  className="blogImg"
                />
                <span className="category">{element.category}</span>
                <h4>{element.title}</h4>
                <div className="writer_section">
                  <div className="author">
                    <img src={element.authorPic} alt={element.author} />
                    <p>{element.author}</p>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <BeatLoader size={30} color="gray" />
        )}
      </Carousel>
    </div>
  );
};

export default TrendingBlogs;
