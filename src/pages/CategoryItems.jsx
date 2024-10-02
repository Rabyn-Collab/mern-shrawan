import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"

const CategoryItems = () => {

  const { category } = useParams();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php', {
        params: {
          c: category
        }
      });
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

  console.log(data);

  return (
    <div>




    </div>
  )
}
export default CategoryItems