import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik";

const AddForm = () => {

  return (
    <div className="max-w-[370px] p-5" >


      <Typography variant="h5" className="mb-4">Add Post</Typography>

      <Formik
        initialValues={{
          title: '',
          detail: '',
          pLang: '',
          colors: [],
          country: '',
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
      >

        {({ handleChange, handleSubmit, values, touched, errors, setFieldValue }) => {

          return <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <Input
                onChange={handleChange}
                name="title"
                label="Title"
                value={values.title}
              />
            </div>

            <div className="flex gap-10">
              <Radio
                onChange={handleChange}
                value={"HTML"}
                name="pLang" label="HTML" />
              <Radio
                onChange={handleChange}
                value={"REACT"}
                name="pLang" label="React" />
            </div>

            <div className="flex w-max gap-4">
              <Checkbox
                name="colors"
                onChange={handleChange}
                value={"Blue"}
                color="blue" label="Blue" />
              <Checkbox
                name="colors"
                onChange={handleChange}
                value={"Red"}
                color="red" label="Red" />

            </div>

            <div className="w-full">
              <Select
                onChange={(e) => setFieldValue("country", e)}
                name="country"
                label="Select Country">
                <Option value="Nepal">Nepal</Option>
                <Option value="China">China</Option>

              </Select>
            </div>





            <div>
              <Textarea
                onChange={handleChange}
                name="detail"
                label="Detail"
                value={values.detail}
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