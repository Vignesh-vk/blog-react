import React from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { blogs } from "../blogs.json";

const HeroSectionContainer = styled.section`
  padding: 20px;
`;

const WelcomeText = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem; // Decrease font size for mobile
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; // Reduced gap for mobile

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Stack cards on mobile
  }
`;

const Card = styled(Link)`
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
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
`;

const Category = styled.div`
  background-color: #6c63ff;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.2rem;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 1rem; // Decrease title font size for mobile
  }
`;

const WriterSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  .author {
    display: flex;
    align-items: center;
  }
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LoaderContainer = styled.div`
  padding: 50px 0;
`;

const HeroSection = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "🌞 Good Morning";
    } else if (hour < 18) {
      return "☀️ Good Afternoon";
    } else {
      return "🌜 Good Evening";
    }
  };

  return (
    <HeroSectionContainer>
      <WelcomeText>{getGreeting()}, Welcome to Our Blog!</WelcomeText>
      <WelcomeText style={{ fontSize: '2.5rem', fontWeight: '700', padding: '0 20px' }}>
        One Stop Daily News, Article, Inspiration, and Tips.
      </WelcomeText>
      <WelcomeText style={{ fontSize: '1rem', fontWeight: '400', color: '#656565', padding: '0 10px' }}>
        Features productivity, tips, inspiration, and strategies for massive profits. Find out how to set up a successful blog or make yours even better!
      </WelcomeText>
      <BlogGrid>
        {blogs && blogs.length > 0 ? (
          blogs.slice(0, 8).map((element) => (
            <Card to={`/blog/${element.id}`} key={element.id}>
              <BlogImage src={element.image} alt={element.title} />
              <Category>{element.category}</Category>
              <Title>{element.title}</Title>
              <WriterSection>
                <div className="author">
                  <AuthorImage src={element.authorPic} alt={element.author} />
                  <p>{element.author}</p>
                </div>
              </WriterSection>
            </Card>
          ))
        ) : (
          <LoaderContainer>
            <BeatLoader color="gray" size={30} />
          </LoaderContainer>
        )}
      </BlogGrid>
    </HeroSectionContainer>
  );
};

export default HeroSection;
