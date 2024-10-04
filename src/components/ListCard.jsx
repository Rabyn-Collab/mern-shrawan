import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from "react-router";


export function ListCard({ meals }) {
  const nav = useNavigate();
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
              onClick={() => nav(`/item-detail/${idMeal}`)}
              key={idMeal}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0 cursor-pointer"
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