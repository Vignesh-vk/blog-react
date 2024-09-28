import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { blogs } from "../blogs.json"

const PopularAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const uniqueAuthors = [];
    blogs.forEach(blog => {
      const author = {
        id: blog.id,
        name: blog.author,
        avatar: blog.authorPic,
        role: "Author"
      };

      if (!uniqueAuthors.find(a => a.id === author.id)) {
        uniqueAuthors.push(author);
      }
    });

    setAuthors(uniqueAuthors);
  }, []);

  return (
    <section className="popularAuthors">
      <h3>Popular Authors</h3>
      <div className="container">
        {authors.length > 0 ? (
          authors.slice(0, 4).map((author) => {
            return (
              <div className="card" key={author.id}>
                <img src={author.avatar} alt="author" />
                <p>{author.name}</p>
                <p>{author.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={30} />
        )}
      </div>
    </section>
  );
};

export default PopularAuthors;
