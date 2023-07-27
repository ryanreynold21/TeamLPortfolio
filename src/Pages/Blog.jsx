import React from "react";
import BlogCard from "../components/BlogCard";
const blogs = [
  {
    id: 1,
    image: "https://tony-react.vercel.app/static/img/blog-1.jpg",
  },
  {
    id: 2,
    image: "https://tony-react.vercel.app/static/img/blog-2.jpg",
  },
  {
    id: 3,
    image: "https://tony-react.vercel.app/static/img/blog-3.jpg",
  },
];

const Blog = () => {
  return (
    <div name="blog" className=" p-8">
      <h2 className="text-2xl md:text-4xl tracking-tight uppercase font-semibold relative inline-block align-top z-10 mb-[10px] py-[10px] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#d9832e] after:w-[50px]">
        Latest Blogs
      </h2>
      <h3 className="mb-14">A LEAD UX & UI DESIGNER BASED IN CANADA</h3>
      <div className="flex items-center justify-between md:mx-20 flex-wrap">
        {blogs.map((blog) => {
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
