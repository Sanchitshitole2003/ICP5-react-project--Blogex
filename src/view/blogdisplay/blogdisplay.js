import React from 'react';
import BlogPost from './BlogPost';

const BlogPost = ({ title, content, author, date }) => {
  return (
    <div className="blog-post">
      <h2 className="blog-title">{title}</h2>
      <p className="blog-author">By {author}</p>
      <p className="blog-date">{date}</p>
      <p className="blog-content">{content}</p>
    </div>


  );
};


export default BlogPost;