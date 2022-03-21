import React from "react";
import Layout from "../layout";

const BlogComponent = (props) => {
  return (
      
    <div className="flex flex-col items-center justify-center my-32">
      <span className="text-center text-gray-700 text-4xl font-bold tracking-widest">
      </span>
       <div className="text-center text-gray-700 text-4xl font-bold tracking-widest">
  <h4>Coming Later</h4>
  </div>
    </div>
  );
};

const Blog = (props) => {
  return <Layout children={<BlogComponent />} />;
};

export default Blog;

