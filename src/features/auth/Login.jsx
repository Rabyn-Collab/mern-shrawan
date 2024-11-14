import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useUserLoginMutation } from "./authApi";
import { useNavigate } from "react-router";



const Login = () => {
  const nav = useNavigate();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const { handleChange, handleSubmit, values, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {

      try {
        const response = await userLogin(val).unwrap();

        toast.success(response?.message);
      } catch (err) {
        // console.log(err);
        toast.error(err.data?.message);
      }



    }
  });


  return (
    <Card color="transparent" shadow={false} className="p-4">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to login.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="space-y-6">

          <div>
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              label="Email" />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              label="Password" />
          </div>
        </div>




        <Button type="submit" loading={isLoading} className="mt-6" fullWidth>
          Login
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <button onClick={() => nav('/signup')} className="font-medium text-gray-900">
            Sign Up
          </button>
        </Typography>
      </form>
    </Card>
  );
}


export default Login