import { useParams } from "react-router"

const CategoryItems = () => {

  const { category } = useParams();
  console.log(category);
  return (
    <div>




    </div>
  )
}
export default CategoryItems