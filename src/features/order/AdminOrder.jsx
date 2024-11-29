import { useGetAllOrdersQuery } from "./orderApi"

const AdminOrder = ({ user }) => {

  const { isLoading, data, isError, error } = useGetAllOrdersQuery(user.token);

  console.log(data);
  return (
    <div>


    </div>
  )
}
export default AdminOrder