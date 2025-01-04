import { makeVar } from '@apollo/client';

const initialUser = () => {
  const savedUser = localStorage.getItem('user');
  return savedUser ? JSON.parse(savedUser) : { attributes: { email: '', password: '' }, username: '', jwtToken: '' };
};

const initialBalanceStatus = () => {
  const savedStatus = localStorage.getItem('show-balance-status');
  return savedStatus ? JSON.parse(savedStatus) : true;
};

// eslint-disable-next-line no-undef
export const userVar = makeVar<User>(initialUser());

// eslint-disable-next-line no-undef
export const setUser = (user: User) => {
  userVar(user);
  localStorage.setItem('user', JSON.stringify(user));
};

export const clearUser = () => {
  userVar({ attributes: { email: '', password: '' }, username: '', jwtToken: '', email: '' });
  localStorage.removeItem('user');
};

export const currencyType = makeVar('');

export const showBalanceVar = makeVar(initialBalanceStatus());

export const setBalanceStatus = (status: boolean) => {
  showBalanceVar(status);
  localStorage.setItem('show-balance-status', JSON.stringify(status));
};
