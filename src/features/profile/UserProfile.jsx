import { useSelector } from "react-redux"
import UserOrder from "../order/UserOrder";
import AdminOrder from "../order/AdminOrder";

const UserProfile = () => {

  const { user } = useSelector((state) => state.userSlice);
  return (
    <div>

      <div>

      </div>



      <div>
        {user.isAdmin ? <AdminOrder user={user} /> : <UserOrder user={user} />}
      </div>


    </div>
  )
}
export default UserProfile