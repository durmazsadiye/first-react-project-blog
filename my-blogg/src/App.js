// src/App.js
import React from 'react';
import BlogPost from './components/BlogPost';
import myPhoto from './assets/my-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  const blogPosts = [
    {
      title: 'Who am I?',
      content: (
        <div className="blog-post-container">
          <div className="blog-post-image">
            <img src={myPhoto} alt="My Photo" />
          </div>
          <div className="blog-post-content">
            <p>
              I am Şadiye DURMAZ. I am a Computer Engineering student.
              I am interested in web design and improving myself in this field.
            </p>
            <p>
              I am also a student in the Web Design and Coding department
              and I will graduate this year.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'MY EDUCATION LIFE',
      content: (
        <>
          <p>
            Konya Food And Agriculture University, Computer Engineering, 2020-2025
          </p>
          <p>
            Anadolu University, Web Design And Coding, 2022-2024
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="blog-container">
      <h1>My Blog Page</h1>

      {blogPosts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}

      <div className="follow-me">
        <h2>Follow Me</h2>
        <div className="social-icons">
          <a href="https://github.com/durmazsadiye" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </a>
          <a href="www.linkedin.com/in/sadiyedurmaz" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

