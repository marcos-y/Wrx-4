import { ICart, ItemCart, Item } from "src/interfaces/cartInterface";

interface IProps {
  itemId: number;
  cartItems: ItemCart[];
}

export const checkIfItemExists = ({ itemId, cartItems }: IProps) =>
  !!cartItems.filter(({ vehiclePart }) => vehiclePart.id === itemId).length;

export const addQuantityToCartItem = ({ itemId, cartItems }: IProps) =>
  cartItems.map((item) => {
    if (item.vehiclePart.id === itemId) item.quantity += 1;
    return item;
  });

export const removeQuantityOrItemFromShoppingCart = ({ itemId, cartItems }: IProps) => {
  const quantity = cartItems.filter((item) => item.vehiclePart.id === itemId)[0].quantity;

  if (quantity > 1) {
    return cartItems.map((item) => {
      if (item.vehiclePart.id === itemId) item.quantity -= 1;
      return item;
    });
  } else return cartItems.filter((item) => item.vehiclePart.id !== itemId);
};

export const deleteItemForCart = ({ itemId, cartItems }: IProps) => cartItems.filter((item) => item.vehiclePart.id !== itemId);

export const filterCartItems = (cartItems: ICart) => {
  const items: Item[] = cartItems.vehicleParts.map((item) => ({ quantity: item.quantity, vehiclePartId: item?.vehiclePart.id }));

  return { items };
};
