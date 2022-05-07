import { Actions } from "../constant/constant";

export const addItemToCart = ({ productId, qty }) => {
  return {
    type: Actions.AddToCart,
    payload: {
      id: productId,
      qty: qty,
    },
  };
};
