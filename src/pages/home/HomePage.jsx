import { useState } from "react";

const HomePage = () => {


  const [data, setData] = useState();

  setTimeout(() => {
    setData({
      name: 'hello jee'
    });

  }, 3000)


  return (
    <div>

      <h1>{data?.name}</h1>




    </div>
  )
}
export default HomePage