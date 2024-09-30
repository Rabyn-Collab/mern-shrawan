import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";










const HomePage = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();



  //   getData LuFunctionSquare
  //   setLoad axios


  // getData no call

  // kehi samayachi
  // setData
  // setaLo
  //   rerender

  //   rerender

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);

    }
  }

  useEffect(() => {
    getData();
  }, [])


  console.log(data);








  return (
    <div>





    </div>
  )
}
export default HomePage