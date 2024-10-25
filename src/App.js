import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./ui/RootLayout";
import CocktailPage from "./features/cocktail/CocktailPage";



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

      ]
    },




  ]);

  return <RouterProvider router={router} />;
}
export default App