import React from "react";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";
import BlogData from "../data/BlogData";
import Newslatter from "../components/Newslatter";
function Blog() {
  return (
    <>
      <Header />{" "}
      <section id="page-header" className="blog-header p-4">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      <section id="blog">
        {BlogData.map((items) => (
          <BlogCard items={items} key={items.id} />
        ))}
      </section>
      <Newslatter />
      <Footer />
    </>
  );
}

export default Blog;
