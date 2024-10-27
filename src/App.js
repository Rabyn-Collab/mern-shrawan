import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayOut from "./components/RootLayOut";
import HomePage from "./pages/HomePage";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";


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
          path: 'add-form',
          element: <AddForm />
        },
        {
          path: 'edit-form/:id',
          element: <EditForm />
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