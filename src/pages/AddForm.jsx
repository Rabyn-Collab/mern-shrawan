import { ur } from "@faker-js/faker";
import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react"
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { addPost } from '../redux/postSlice';
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router";
const supportedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp', 'image/gif'];


const valSchema = Yup.object(
  {
    title: Yup.string().min(10, 'Title should be more than 10').max(150, 'Title should be less than 150').required(),
    detail: Yup.string().required(),
    pLang: Yup.string().required(),
    colors: Yup.array().min(1).required(),
    country: Yup.string().required(),
    image: Yup.mixed().test('fileType', 'File type not supported', (value) => {
      console.log(value)
      return value && supportedTypes.includes(value.type);
    })
      // .
      //   test('fileSize', 'File size should be less than 2MB', (value) => {
      //     return value && value.size <= 2 * 1024 * 1024;
      //   })
      .required('File is required'),
  }
);

const AddForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="max-w-[380px] p-5" >


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
          delete val.image;
          dispatch(addPost({ ...val, id: nanoid() }));
          nav(-1);

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


              {errors.colors && touched.colors && <p className="text-red-500">{errors.colors}</p>}

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
              <Input
                onChange={(e) => {
                  const file = e.target.files[0];
                  // const imagePath = URL.createObjectURL(e.target.files[0]);

                  const reader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.addEventListener('load', (e) => {
                    setFieldValue("preview", e.target.result);
                  })
                  setFieldValue("image", file);

                }}
                name="image"
                label="Image"
                type="file"
              />

              {errors.image && touched.image && <p className="text-red-600">{errors.image}</p>}
            </div>

            <img src={values.preview} alt="" />


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
                  const imgpath = URL.createObjectURL(e.target.files[0]);
                  setFieldValue("preview", imgpath);
                  setFieldValue("image", e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
                name="image"
                label="Image"
                type="file" />

              {errors.image && touched.image && <p className="text-red-600">{errors.image}</p>}



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