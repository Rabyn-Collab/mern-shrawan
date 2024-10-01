import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "../../components/CardComponent";
import { Card } from "@material-tailwind/react";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState();

  const getData = async () => {
    try {
      setLoad(true);
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data.categories);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data && data.map((val) => {
        return (
          <CardComponent val={val} id={val.idCategory} />
        );
      })}

    </div>
  );
};

export default HomePage;
