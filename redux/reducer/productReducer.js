import { Actions } from "../constant/constant";

export const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { action, payload }) => {
  switch (action) {
    case Actions.AddToCart:
      return {
        
      }

    default:
      return state;
  }
};
