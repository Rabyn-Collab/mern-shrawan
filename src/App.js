import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayOut from "./components/RootLayOut";
import HomePage from "./pages/HomePage";
import CategoryItems from "./pages/CategoryItems";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'category-items/:category',
          element: <CategoryItems />
        },

      ]
    },

    // {
    //   path: '*',
    //   element: <NotFound />
    // },


  ]);

  return <RouterProvider router={router} />;
}
export default App