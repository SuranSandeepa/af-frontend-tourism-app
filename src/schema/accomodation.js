import * as yup from "yup";

export const reserveFormSchema = yup.object().shape({
  email: yup.string().email().label("Email").required(),
  checkInDate: yup.string().label("Check in Date").required(),
  checkOutDate: yup.string().label("Check out Date").required(),
  guests: yup.number().label("Guests").required(),
  specialRequests: yup.string().label("Special Requests"),
  fullName: yup.string().label("Full Name").required(),
  phone: yup.string().label("Phone").required(),
  address: yup.string().label("Address"),
  termsAgree: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});

export const accomadationEditorSchema = yup.object().shape({
  provider: yup.string().required(),
  address: yup.string().required(),
  price: yup.number().required(),
  desc: yup.string(),
  guests: yup.string().required(),
  name: yup.string().required(),
});
