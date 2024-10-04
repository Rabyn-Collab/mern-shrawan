import { useParams } from "react-router"
import { ListCard } from "../components/ListCard";
import { useApiHooks } from "../hooks/apiHooks";
import { categoryItemsApi } from "../data/apiUrls";

const CategoryItems = () => {
  const { category } = useParams();
  const [data, load, error] = useApiHooks(categoryItemsApi, {
    c: category
  });



  return (
    <div>


      {data && <ListCard meals={data.meals} />}



    </div>
  )
}
export default CategoryItems