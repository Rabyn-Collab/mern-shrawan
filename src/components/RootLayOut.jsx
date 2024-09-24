import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "../pages/home/Footer"

const RootLayOut = () => {
  return (
    <>

      <Header />
      <Outlet />

      <Footer />


    </>
  )
}
export default RootLayOut