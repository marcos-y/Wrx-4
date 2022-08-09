import { verifyToken } from "../serviceRequests/user";

export const saveDataAfterLogin = async (token, userInfo) => {
  await localStorage.setItem("token", token);
  await localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const getToken = async () => {
  const token = await localStorage.getItem("token");

  return token;
};

export const isTokenInvalid = async (token) => {
  const res = await verifyToken(token);

  if (res.status !== 200) return true;
};

export const getUserInfo = async () => {
  const unparsedUserInfo = await localStorage.getItem("userInfo");

  return JSON.parse(unparsedUserInfo);
};

export const clearToken = async () => {
  await localStorage.removeItem("token");
};

export const clearUserInfo = async () => {
  await localStorage.removeItem("userInfo");
};

export const clearLocalStorage = async () => {
  await localStorage.clear();
};
