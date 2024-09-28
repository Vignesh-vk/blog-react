import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blog";
import SingleBlog from "../src/pages/SingleBlog";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import AllAuthors from "../src/pages/Authors";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop/Scroll";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/authors" element={<AllAuthors />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
};

export default App;
