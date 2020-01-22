import * as Yup from "yup";

export const AddArticleSchema = Yup.object().shape({
  creatorName: Yup.string().required("Name is required"),
  creatorEmail: Yup.string().required("Email is required"),
  pseudonym: Yup.string().required("Pseudonym is required"),
  img: Yup.string().required("Image URL is required"),
  title: Yup.string()
    .min(2, "Too Short!")
    .max(40, "Too Long!")
    .required("Title is required"),
  body: Yup.string()
    .min(10, "Too Short!")
    .max(100, "Too Long!")
    .required("Text is required"),
  category: Yup.string().required("Category is required")
});
