import { useState, useEffect, useRef } from "react";
require("dotenv").config();

// show each blog post and respective comments

const Show = () => {
  const [post, setPost] = useState({});

  // INDEX / GET
  const getPost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/post`);
      const json = await res.json();
      console.log(json);
      setPost(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      {post[0] ? (
        <>
          <h2>{post[0].title}</h2>
          <p>{post[0].author}</p>
          <img
            src={post[0].img}
            alt={post[0].title}
            className="blog-post-img"
          />
          <p>{post[0].content}</p>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Show;
