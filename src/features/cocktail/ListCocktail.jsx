import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";

export function ListCocktail({ drinks }) {

  const nav = useNavigate();

  return (
    <Card className="w-96">
      <List>

        {drinks.map((drink) => {

          return <ListItem
            onClick={() => nav(`/cocktail-detail/${drink.idDrink}`)}
            key={drink.idDrink}>
            <ListItemPrefix>
              <Avatar variant="circular" alt="candice" src={drink.strDrinkThumb} />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                {drink.strDrink}
              </Typography>

            </div>
          </ListItem>;
        })}







      </List>
    </Card>
  );
}