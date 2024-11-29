import { useGetUserOrdersQuery } from "./orderApi";

const UserOrder = ({ user }) => {

  const { isLoading, data, isError, error } = useGetUserOrdersQuery(user.token);

  console.log(data);
  return (
    <div>



    </div>
  )
}
export default UserOrder