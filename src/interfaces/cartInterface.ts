import { IVehiclePart } from "./vehiclePart";

export interface ItemCart {
  quantity: number;
  vehiclePart: IVehiclePart;
}

export interface IPaymentMethod {
  type: MethodType;
  stripeID: string;
  couponID?: string;
  customerId?: string;
  couponData?: ICoupon;
}

export interface IDeliveryMethod {
  type: DeliveryType;
  information: {
    city: string;
    address: string;
    zipCode: string;
    locality: string;
    comments: string;
    appartment: string;
  };
}

export interface PaymentIntentDTO {
  shoppingCart: {
    products?: any[];
    items: ItemCart[];
  };

  paymentMethod: IPaymentMethod;
  deliveryMethod: IDeliveryMethod;
}

export interface ICoupon {
  id?: string;
  name?: string;
  valid: boolean;
  amount_off?: number;
  percent_off?: number;
  max_redemptions?: number;
  duration_in_months?: number;
  duration: "once" | "repeating" | "forever";
}

export interface Item {
  quantity: number;
  vehiclePartId: number;
}

export interface ICart {
  products: any[];
  vehicleParts: ItemCart[];
}

export enum MethodType {
  TRANSFER = "transfer",
  CREDIT_CARD = "credit-card",
}

export enum DeliveryType {
  LOCAL = "local",
  DOMICILIO = "domicilio",
}
