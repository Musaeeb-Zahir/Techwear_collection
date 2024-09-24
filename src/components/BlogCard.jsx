import React from "react";

function BlogCard({ items }) {
  return (
    <div className="blog-box">
      <div className="blog-img">
        <img src={items.image} alt="" />
      </div>
      <div className="blog-details">
        <h4>{items.blogTitle}</h4>
        <p>{items.blogDiscription}</p>
        <a href="#">Continue reading</a>
      </div>
      <h1>13/01</h1>
    </div>
  );
}

export default BlogCard;
