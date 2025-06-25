import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name must not be blank')
    .min(2, 'Name must be between 2 and 50 characters')
    .max(50, 'Name must be between 2 and 50 characters'),

  username: yup
    .string()
    .required('Username must not be blank')
    .min(4, 'Username must be between 4 and 20 characters')
    .max(20, 'Username must be between 4 and 20 characters'),

  email: yup.string().required('Email must not be blank').email('Invalid email format'),

  password: yup
    .string()
    .required('Password must not be blank')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one number')
    .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),

  confirmPassword: yup
    .string()
    .required('Confirm password must not be blank')
    .oneOf([yup.ref('password')], 'Passwords must match'),

  phone: yup
    .string()
    .required('Phone number must not be blank')
    .matches(/^(\\+84|0)[1-9][0-9]{8}$/, 'Invalid phone number format'),

  address: yup.string().required('Address must not be blank'),

  gender: yup
    .string()
    .required('Gender must not be blank')
    .matches(/^(Male|Female|Other)$/, 'Gender must be Male, Female, or Other'),

  birthday: yup
    .string()
    .required('Birthday must not be blank')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Birthday must be in the format yyyy-MM-dd'),
})
