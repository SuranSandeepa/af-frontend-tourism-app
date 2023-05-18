import * as yup from "yup";

export const reserveFormSchema = yup.object().shape({
  email: yup.string().email().label("Email").required(),
  checkInDate:yup.string().required(),
  checkOutDate: yup.string().required(),
  guests: yup.number().required(),
  specialRequests: yup.string(),
  fullName: yup.string().required(),
  email: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string(),
  termsAgree: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});