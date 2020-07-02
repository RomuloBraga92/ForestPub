import { ValidationError } from 'yup';

export default function getValidantionErrors(err) {
  const validationErrors = {};

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
