import Axios from "axios";

export const getDeliveryList = async (page) => {
  try {
    const res = await Axios({
      method: "GET",
      // headers: {
      //     token
      // },
      url: `/api/delivery/list-as-admin/${page}`,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

export const getDataForConfirmingADelivery = async (delivery) => {
  try {
    const res = await Axios({
      method: "GET",
      // headers: {
      //     token
      // },
      url: `/api/delivery/data-for-confirm/${delivery.id}`,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

export const confirmDelivery = async (deliveryId, routeId, driverId) => {
  try {
    const res = await Axios({
      method: "PUT",
      // headers: {
      //   token
      // },
      url: `/api/delivery/to-confirmed/${deliveryId}`,
      data: {
        routeId,
        driverId,
      },
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

export const changeDeliveryToRetired = async (deliveryId, routeId) => {
  try {
    const res = await Axios({
      method: "PUT",
      // headers: {
      //   token,
      // },
      url: `/api/delivery/to-retired/${deliveryId}/${routeId}`,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
