import { useParams } from "react-router"
import { useApiHooks } from "../hooks/apiHooks";
import { itemDetailApi } from "../data/apiUrls";

const ItemDetail = () => {

  const { id } = useParams();

  const [data, load, error] = useApiHooks(itemDetailApi, {
    i: id
  });

  const meal = data?.meals[0];
  const vidKey = meal?.strYoutube.split('=')[1];

  return (
    <div className="p-5">

      {meal &&
        <div className="space-y-4">
          <h1>{meal.strMeal}</h1>
          <iframe className="h-[250px] w-[400px]" src={`https://www.youtube.com/embed/${vidKey}`} frameborder="0" allowFullScreen></iframe>

          {/* <img src={meal.strMealThumb} alt={meal.strMeal} /> */}
          <p>{meal.strInstructions}</p>
        </div>}




    </div>
  )
}
export default ItemDetail