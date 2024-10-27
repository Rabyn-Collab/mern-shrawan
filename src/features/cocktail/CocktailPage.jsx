import { useGetCocktailsQuery } from "./cocktailApi"
import { ListCocktail } from "./ListCocktail";

const CocktailPage = () => {
  const { isLoading, isFetching, isError, data, error } = useGetCocktailsQuery();


  console.log(data);
  return (
    <div>


      {data && <ListCocktail drinks={data.drinks} />}


    </div>
  )
}
export default CocktailPage