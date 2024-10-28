import { useParams } from "react-router"
import { useGetCocktailByIdQuery } from "./cocktailApi";

const ItemDetail = () => {
  const { id } = useParams();


  const { isLoading, isFetching, isError, data, error } = useGetCocktailByIdQuery(id);


  const drink = data?.drinks[0];

  // console.log(drink);
  // const person = {
  //   name: 'lio',
  //   age: 90
  // };

  // const keyz = Object.keys(person);
  // console.log(person[keyz[1]]);

  return (
    <div className="p-5">




      {drink && <div className="space-y-4">
        <h1>{drink.strDrink}</h1>
        <img className="h-[300px] w-[300px]" src={drink.strDrinkThumb} alt="" />

        <p>{drink.strInstructions}</p>

        <h1>Ingredients</h1>
        {Object.keys(drink).map((key) => {
          return key.includes('Ingredient') ? <h1 key={key}>
            {drink[key]}</h1> : null;


        })}

      </div>

      }


    </div>
  )
}
export default ItemDetail