import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "../pages/home/footer"

const RootLayOut = () => {
  return (
    <>

      <Header />
      <Outlet />



    </>
  )
}
export default RootLayOut