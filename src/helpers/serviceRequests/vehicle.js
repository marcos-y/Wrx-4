import Axios from "axios";
import qs from "query-string";

export const getVehicleById = async (id, vehiclePartsIds) => {
  try {
    const res = await Axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v1/vehicle/${id}`,
      params: { vehiclePartsIds },
      paramsSerializer: (params) => qs.stringify(params),
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getVehiclesForConfigurator = async () => {
  try {
    const res = await Axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v1/vehicle`,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};
