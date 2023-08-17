import * as yup from 'yup';

export const answerValidationSchema = yup.object().shape({
  content: yup.string().required(),
  question_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
