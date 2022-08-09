import axios, { AxiosResponse } from "axios";

interface ILoginBody {
  email: string;
  password: string;
}

interface IRegisterBody {
  email: string;
  name: string;
  password: string;
  phoneNumber: string;
}

const login = async (body: ILoginBody) => {
  try {
    const res: AxiosResponse<any> = await axios({
      data: body,
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v1/user/login`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};

const register = async (body: IRegisterBody) => {
  try {
    const res: AxiosResponse<any> = await axios({
      data: body,
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v1/user`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};

const forgotPassword = async (body: IRegisterBody) => {
  try {
    const res: AxiosResponse<any> = await axios({
      data: body,
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v1/user/forgotPassword`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};

const getClientWithOrders = async (clietntId: string | number) => {
  try {
    const res: AxiosResponse = await axios({
      method: "get",
      url: `/user/${clietntId}/orders`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export default {
  login,
  register,
  forgotPassword,
  getClientWithOrders,
};
