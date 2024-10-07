import { Button, Input, Typography } from "@material-tailwind/react"
import { Formik, useFormik } from "formik";

const AddForm = () => {

  // const { handleChange, handleSubmit, values, touched, errors } = useFormik({
  //   initialValues: {
  //     title: ''
  //   },
  //   onSubmit: (val) => {
  //     console.log(val);
  //   }
  // });





  console.log('render');

  return (
    <div className="max-w-[370px] p-5" >


      <Typography variant="h5" className="mb-4">Add Post</Typography>

      <Formik

        initialValues={{
          title: ''
        }}
        onSubmit={(val) => {

          console.log(val);
        }}
      >

        {({ handleChange, handleSubmit, values, touched, errors }) => {

          return <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <Input
                onChange={handleChange}
                name="title"
                label="Title"
              />
            </div>


            <Button type="submit" className="py-2">Submit</Button>


          </form>
        }}



      </Formik>







    </div>
  )
}
export default AddForm