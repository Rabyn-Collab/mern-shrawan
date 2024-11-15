import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const UserRoutes = () => {

  const { user } = useSelector((state) => state.userSlice);


  return user ? <Navigate to="/" /> : <Outlet />;



}
export default UserRoutes