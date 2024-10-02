import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";


export function ListCard({ meals }) {
  console.log(meals);
  return (
    <Card className="w-96">
      <CardBody>
        <div className="mb-4 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="">
            Food Dishes
          </Typography>

        </div>
        <div className="divide-y divide-gray-200">
          {meals.map(({ strMeal, strMealThumb, idMeal }) => (
            <div
              key={idMeal}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                {/* flskmf jnsa jabs*/}
                <Avatar size="sm" src={strMealThumb} alt={strMealThumb} />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {strMeal}
                  </Typography>

                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                ${900}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}