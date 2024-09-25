import { faker } from "@faker-js/faker";
import { useState } from "react"

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  const postAdd = () => {
    const postData = {
      id: faker.string.uuid(),
      username: faker.internet.displayName(),
      image: faker.image.avatar(),
      email: faker.internet.email(),
      data: faker.food.description()
    };
    setPosts((prev) => [...prev, postData]);

  }



  return (
    <div className="p-4 space-y-4">


      <button
        onClick={postAdd}
        className="bg-green-400 px-2 rounded-md py-1 text-sm hover:ring-offset-2 hover:ring-2">Create Dummy Data</button>

      {posts.map((post) => {
        return <div key={post.id} className="mb-9">
          <h1>{post.username}</h1>
          <img className="h-[100px]" src={post.image} alt="" />
          <p>{post.email}</p>
          <p>{post.data}</p>
          <button className="bg-pink-700 text-white px-2 mt-2">Delete</button>
        </div>
      })}



    </div>
  )
}
export default HomePage