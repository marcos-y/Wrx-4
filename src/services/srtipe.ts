import axios, { AxiosResponse } from "axios";
import { ICoupon, IDeliveryMethod, IPaymentMethod, Item } from "src/interfaces/cartInterface";

interface IPaymentIntentDTO {
  shoppingCart: {
    products?: any[];
    items: Item[];
  };

  paymentMethod: IPaymentMethod;
  deliveryMethod: IDeliveryMethod;
}

export const retrieveCoupon = async (couponId: string) => {
  try {
    const res: AxiosResponse<ICoupon> = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v1/coupons/${couponId}`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};

export const paymentIntentDTO = async (paymentData: IPaymentIntentDTO) => {
  try {
    const res: AxiosResponse<any> = await axios({
      method: "POST",
      data: paymentData,
      url: `${process.env.REACT_APP_API_URL}/api/v1/stripe`,
    });

    return res;
  } catch (error) {
    throw error.response;
  }
};

export const paymentTwoStepsConfirmation = async (body: { customerId: string; orderId: string }) => {
  try {
    const res: AxiosResponse<any> = await axios({
      data: body,
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v1/stripe/paymentConfirmation`,
    });

    return res.data;
  } catch (error) {
    throw error.response;
  }
};
