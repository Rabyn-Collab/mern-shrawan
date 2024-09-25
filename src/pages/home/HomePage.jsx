import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const postAdd = () => {
    const postData = {
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      description: faker.lorem.sentences(),
    };
    setPosts((prevPosts) => [...prevPosts, postData]);
  };

  useEffect(() => {
    // Add a post on initial render
    postAdd();
  }, []);

  return (
    <>
      <div className="">
        {posts.map((post, index) => (
          <div key={index} className="p-2 border border-gray-200 rounded">
            <img src={post.image} alt={post.username} className="w-16 h-16 rounded-full" />
            <h3>{post.username}</h3>
            <p>{post.email}</p>
            <p>{post.description}</p>
          </div>
        ))}
      </div>

      <button onClick={postAdd} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Add Post
      </button>
    </>
  );
};

export default HomePage;