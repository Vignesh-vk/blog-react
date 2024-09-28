import React, { useState } from "react";
import LatestBlogs from "./Latest";
import { blogs } from "../blogs.json"

const Blogs = () => {
  const [mode, setMode] = useState("light")
  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <LatestBlogs blogs={blogs} title={"Blogs"} />
    </article>
  );
};

export default Blogs;
