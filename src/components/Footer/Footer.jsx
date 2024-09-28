import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: aqua;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
  }

  h3 {
  color: black;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
  color: black;
  }

  a {
    color: black;
    text-decoration: none;
    margin: 5px 0;
    display: block;
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;

    a {
      font-size: 24px;
      color: black;
      transition: color 0.3s;

      &:hover {
        color: white;
      }
    }
  }

  .footer-info {
  color: black;
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <div className="about">
          <h3>About Us</h3>
          <p>
            We are a community-driven blog focused on sharing insights on
            various topics including technology, lifestyle, and travel.
          </p>
          <p>
            <span>Email:</span> info@reactblog.com
          </p>
          <p>
            <span>Phone:</span> +91-9876543211
          </p>
        </div>
        <div className="quick-links">
          <h3 style={{marginBottom: '40px'}}>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/authors">All Authors</Link>
            </li>
          </ul>
        </div>
        <div className="quick-links">
          <h3 style={{marginBottom: '40px'}}>Explore Topics</h3>
          <ul>
            <li>Health & Wellness</li>
            <li style={{marginTop: '15px'}}>Personal Finance</li>
            <li style={{marginTop: '15px'}}>Food & Recipes</li>
            <li style={{marginTop: '15px'}}>Travel Tips</li>
            <li style={{marginTop: '15px'}}>Self-Improvement</li>
            <li style={{marginTop: '15px'}}>Productivity Hacks</li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <AiFillYoutube />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="footer-info">
        &copy; {new Date().getFullYear()} React Blog. All Rights Reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
