import React, { useEffect, useState } from "react";
import { blogs } from "../blogs.json";
import { BeatLoader } from "react-spinners";

const AllAuthors = () => {
  const [authors, setAuthors] = useState([]);
  const [mode, setMode] = useState("light");

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
    <article className={mode === "dark" ? "dark-bg all-authors" : "light-bg all-authors"}>
      <h2>ALL AUTHORS</h2>
      <div className="container">
        {authors.length > 0 ? (
          authors.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.avatar} alt="author_avatar" />
                <h3>{element.name}</h3>
                <p>{element.role}</p>
              </div>
            );
          })
        ) : (
          <BeatLoader color="gray" size={50} style={{ padding: "200px 0" }} />
        )}
      </div>
    </article>
  );
};

export default AllAuthors;
