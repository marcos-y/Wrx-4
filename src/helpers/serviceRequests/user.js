import Axios from "axios";

export const login = async (email, password) => {
  try {
    const res = await Axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/user/login`,
      data: {
        email,
        password,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

export const verifyToken = async (token) => {
  try {
    const res = await Axios({
      method: "GET",
      headers: {
        authorization: token,
      },
      url: `${process.env.REACT_APP_API_URL}/api/user/verify-token`,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
