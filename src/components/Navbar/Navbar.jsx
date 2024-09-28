import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import {blogs} from "../../blogs.json";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("light")
  const [searchTerm, setSearchTerm] = useState("");
  const handleNavbar = () => {
    setShow(!show);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <section
      className={
         mode === "light"
          ? "header light-navbar"
          : "header dark-navbar"
      }
    >
      <nav>
        <div className="logo">
          <span>React-Blog</span>
        </div>
        <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-bar"
          />
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <Link to={"/"} onClick={handleNavbar} style={{fontWeight: '900', fontSize: '16px'}}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/blogs"} onClick={handleNavbar} style={{fontWeight: '900', fontSize: '16px'}}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to={"/authors"} onClick={handleNavbar} style={{fontWeight: '900', fontSize: '16px'}}>
                ALL AUTHORS
              </Link>
            </li>
          </ul>
        </div>
        <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
      </nav>

      {searchTerm && (
        <div className="search-results">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="result-item"
                onClick={() => setSearchTerm("")}
              >
                <h4>{blog.title}</h4>
                <p>{blog.author}</p>
              </Link>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Navbar;
