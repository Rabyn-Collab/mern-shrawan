
import CardCompo from "../components/CardCompo";
import { categoryApi } from "../data/apiUrls";
import { useApiHooks } from "../hooks/apiHooks";



const HomePage = () => {
  const [data, load, error] = useApiHooks(categoryApi);


  return (
    <div className="p-5 grid grid-cols-3 gap-x-4  gap-y-9">


      {data && data.categories.map((cata) => {
        return <CardCompo cata={cata} key={cata.idCategory} />
      })}


    </div>
  )
}
export default HomePage