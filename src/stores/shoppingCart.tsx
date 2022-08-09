import create, { UseStore } from "zustand";
import { IDeliveryMethod, IPaymentMethod, ICart, DeliveryType, MethodType } from "src/interfaces/cartInterface";

interface IUseShhoppingCart {
  shoppingCart: ICart;
  paymentMethod: IPaymentMethod;
  deliveryMethod: IDeliveryMethod;
  setshoppingCart: (shoppingCart: ICart) => void;
  setPaymentMethod: (paymentMethod: IPaymentMethod) => void;
  setDeliveryMethod: (deliveryMethod: IDeliveryMethod) => void;
}

export const useShoppingCart: UseStore<IUseShhoppingCart> = create((set) => ({
  shoppingCart: {
    products: [],
    vehicleParts: [],
  },

  deliveryMethod: {
    type: DeliveryType.DOMICILIO,
    information: {
      city: "",
      address: "",
      zipCode: "",
      locality: "",
      comments: "",
      appartment: "",
    },
  },

  paymentMethod: {
    stripeID: "",
    couponID: "",
    customerID: "",
    type: MethodType.CREDIT_CARD,
  },

  setshoppingCart: (shoppingCart: ICart) => set(() => ({ shoppingCart })),
  setPaymentMethod: (paymentMethod: IPaymentMethod) => set(() => ({ paymentMethod })),
  setDeliveryMethod: (deliveryMethod: IDeliveryMethod) => set(() => ({ deliveryMethod })),
}));

/* {
        quantity: 1,
        vehiclePart: {
          id: 8,
          name: "Paragope Delantero",
          image: "",
          category: "Racks",
          price: 100,
          information: {},
          dataSheet: "",
          vehicleId: 1,
          description: "",
          instructions: [],
          renderModelFileName: "rack.glb",
          instructionsFilePath: "",
        },
      },
      {
        quantity: 1,
        vehiclePart: {
          id: 9,
          name: "Rack Lorem",
          image: "",
          category: "Racks",
          price: 300,
          information: {},
          dataSheet: "",
          vehicleId: 1,
          description: "",
          instructions: [],
          renderModelFileName: "rack.glb",
          instructionsFilePath: "",
        },
      },
      {
        quantity: 1,
        vehiclePart: {
          id: 10,
          name: "Rack",
          image: "",
          category: "Racks",
          price: 100,
          information: {},
          dataSheet: "",
          vehicleId: 1,
          description: "",
          instructions: [],
          renderModelFileName: "rack.glb",
          instructionsFilePath: "",
        },
      }, */
