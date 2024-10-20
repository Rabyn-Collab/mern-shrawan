import { ur } from "@faker-js/faker";
import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik";
import * as Yup from 'yup';
const supportedtypes = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
const valSchema = Yup.object(
  {
    // title: Yup.string().matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "please enter valid email").required(),
    title: Yup.string().min(10).max(150).required(),
    detail: Yup.string().required(),
    pLang: Yup.string().required(),
    colors: Yup.array().min(1).required(),
    country: Yup.string().required(),
    image: Yup.mixed().test('filetype', 'Please Select an image', (value) => {

      return value && supportedtypes.includes(value.type);
    }).required()
  }
);

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
          image: null,
          preview: ''
        }}
        onSubmit={(val) => {
          console.log(val);
        }}
        validationSchema={valSchema}
      >

        {({ handleChange, handleSubmit, values, touched, errors, setFieldValue }) => {


          return <form onSubmit={handleSubmit} className="space-y-5">

            <div className="space-y-2">
              <Input
                onChange={handleChange}
                name="title"
                label="Title"
                value={values.title}
              />

              {errors.title && touched.title && <p className="text-red-600">{errors.title}</p>}
            </div>

            <div className="w-max">
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

              {errors.pLang && touched.pLang && <p className="text-red-600">{errors.pLang}</p>}
            </div>

            <div className=" w-max ">
              <div className="flex gap-2">
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


              {errors.colors && touched.colors && <p className="text-red-600">{errors.colors}</p>}

            </div>

            <div className="w-full">
              <Select
                onChange={(e) => setFieldValue("country", e)}
                name="country"
                label="Select Country">
                <Option value="Nepal">Nepal</Option>
                <Option value="China">China</Option>

              </Select>
              {errors.country && touched.country && <p className="text-red-600">{errors.country}</p>}
            </div>





            <div>
              <Textarea
                onChange={handleChange}
                name="detail"
                label="Detail"
                value={values.detail}
              />

              {errors.detail && touched.detail && <p className="text-red-600">{errors.detail}</p>}
            </div>

            <div>
              <input
                onChange={(e) => {
                  const img = URL.createObjectURL(e.target.files[0]);
                  setFieldValue("image", img);
                  setFieldValue("preview", img);
                  console.log(e.target.files[0]);
                }}
                name="image"
                label="Image"
                type="file" />



            </div>
            <img src={values.preview} alt="" />


            <Button type="submit" className="py-2">Submit</Button>


          </form>
        }}



      </Formik>







    </div>
  )
}
export default AddForm