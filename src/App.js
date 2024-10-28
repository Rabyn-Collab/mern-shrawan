import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout";
import CocktailPage from "./features/cocktail/CocktailPage";
import ItemDetail from "./features/cocktail/ItemDetail";



const App = () => {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <CocktailPage />
        },
        {
          path: 'cocktail-detail/:id',
          element: <ItemDetail />
        },

      ]
    },




  ]);

  return <RouterProvider router={router} />;
}
export default App