import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import CardCompo from "../components/CardCompo";



const HomePage = () => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);







  return (
    <div className="p-5 grid grid-cols-3 gap-x-4  gap-y-9">


      {data && data.categories.map((cata) => {
        return <CardCompo cata={cata} key={cata.idCategory} />
      })}


    </div>
  )
}
export default HomePage