import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from './AboutPage';

import ContactPage from "./ContactPage";
import NotFound from "./NotFound";
import RootLayOut from "./components/RootLayOut";
import Homepage from './home/Homepage';





const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Homepage/>
        },
        {
          path: 'about-page',
          element: <AboutPage/>
        },
        {
          path:'cont-page',
          element: <ContactPage/>
        },
      ]
    },

    {
      path: '*',
      element: <NotFound />
    }


  ]);

  return <RouterProvider router={router} />;
}
export default App;