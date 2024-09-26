import React, { useState } from 'react';
import { faker } from '@faker-js/faker';

const HomePage = () => {
  const [posts, setPosts] = useState([]);


  const postAdd = () => {
    const postData = {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      description: faker.lorem.sentences(),
    };
    setPosts((prevPosts) => [...prevPosts, postData]);
  };

  const postDelete = (id) => {
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
  };

  return (
    <>
      <div className="">
        {posts.map((post) => (
          <div key={post.id} className="p-2 border border-gray-200 rounded mb-4">
            <img src={post.image} alt={post.username} className="w-16 h-16 rounded-full" />
            <h3>{post.username}</h3>
            <p>{post.email}</p>
            <p>{post.description}</p>
            <button
              onClick={() => postDelete(post.id)}
              className="mt-2 p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button onClick={postAdd} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Add Posts
      </button>
    </>
  );
};

export default HomePage;
