import { number, object, ref, string } from 'yup';

import { getLimits } from '.';

export const validators = {
  swapAmount: number().required('Swap amount is required').typeError('Swap amount must be a number'),
  receiveAmount: number()
    .required('Receive amount is required')
    .positive('Receive amount must be greater than zero')
    .typeError('Receive amount must be a number'),
  amount: number().required('Amount is required').typeError('Amount must be a number'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  fullName: string().required('Full name is required'),
  email: string().email('Invalid email address').required('Email is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[0-9]/, 'Password must contain a number')
    .matches(/[~!@#$%^&*()_+=-]/, 'Password must contain a special character'),
  confirmPassword: string()
    .required('Confirm Password is required')
    .oneOf([ref('password'), ''], 'Passwords must match'),
  code: number().required('Confirmation code is required').typeError('Confirmation code must be a number'),
  phoneNumber: string().required('Phone number is required'),
  bankName: string().required('Bank name is required'),
  accountNumber: string().required('Account number is required'),
  reference: string().required('Transaction reference is required'),
  paymentType: string().required('Payment type is required'),
  walletAddress: string().required('Wallet address is required'),
};

export const validationSchema = (fieldName, symbol) => {
  return object().shape({
    [fieldName]: number()
      .max(getLimits(symbol).max, `Max ${getLimits(symbol).max} ${symbol}`)
      .min(getLimits(symbol).min, `Min ${getLimits(symbol).min} ${symbol}`)
      .required('Amount is required')
      .positive('Amount must be greater than zero'),
  });
};
