import { Button } from "@material-tailwind/react";
import { useAddGamesMutation } from "../sports/sportsApi";
import { useGetCocktailsQuery } from "./cocktailApi"
import { ListCocktail } from "./ListCocktail";
import { faker } from "@faker-js/faker";

const CocktailPage = () => {


  const { isLoading, isFetching, isError, data, error } = useGetCocktailsQuery();

  // const persons = ['ram', 'shyam', 'rita'];

  // const [a, b] = persons;

  const [addGames, { isLoading: isLoad }] = useAddGamesMutation();


  const addToGames = async () => {
    try {

      const response = await addGames({
        name: faker.food.dish()
      });
      console.log('add success');

    } catch (err) {
      console.log(err);

    }
  }




  return (
    <div className="p-4">

      <Button loading={isLoad} onClick={addToGames}>Add Games</Button>


      {data && <ListCocktail drinks={data.drinks} />}


    </div>
  )
}
export default CocktailPage