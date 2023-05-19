import * as yup from "yup";


export const foodEditorSchema = yup.object().shape({
  provider: yup.string().required(),
  name:yup.string().required(),
  desc: yup.string(),
});