import React from "react";
import { motion } from "framer-motion";
import LatestBlogs from "./Latest";
import HeroSection from "./Hero";
import TrendingBlogs from "./Trending";
import PopularAuthors from "./PopularAuthor";
import { blogs } from "../blogs.json";

const Home = () => {
  const filteredBlogs = blogs.slice(0, 6);

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <TrendingBlogs />
      <LatestBlogs heading={"Latest Blogs"} blogs={filteredBlogs} />
      <PopularAuthors />
    </motion.article>
  );
};

export default Home;
