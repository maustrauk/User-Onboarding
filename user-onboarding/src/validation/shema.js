import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name must be at least 4 chars long"),
  email: yup
    .string()
    .email("Must be valid email address")
    .required("Must include email address")
    .notOneOf(["waffle@syrup.com"], "That email is already taken"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 chars long"),
  role: yup
    .string()
    .required("You must select your role"),
  dob: yup
    .date()
    .required("You need to enter your's DoB")
    .max("11-11-2002", "You shold be at least 18 years old"),
  tel: yup
    .string()
    .required("You need to enter mobile number")
    .min(11, "Not enough digits")
    .max(11, "Too much digits")
    .matches(/^\d+$/,"Digits only"),
  git: yup
    .string()
    .url("Must be URL of your's Github account"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the Terms of Service"),
});