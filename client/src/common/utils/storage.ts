import { STORAGE_KEYS } from "../constants";

export const saveTokenToStorage = (token: string) => {
  window.localStorage.setItem(STORAGE_KEYS.token, token);
};

export const getTokenFromStorage = () => {
  const token = window.localStorage.getItem(STORAGE_KEYS.token);
  return `Bearer ${token}`;
};
