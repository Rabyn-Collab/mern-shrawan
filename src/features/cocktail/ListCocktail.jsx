import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function ListCocktail({ drinks }) {
  return (
    <Card className="w-96">
      <List>

        {drinks.map((drink) => {
          console.log(drink);
          return <ListItem key={drink.idDrink}>
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