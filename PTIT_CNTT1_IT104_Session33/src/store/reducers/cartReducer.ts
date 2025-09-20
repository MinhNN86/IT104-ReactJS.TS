type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
};

type CartType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type ActionType = {
  type: string;
  payload: ProductType;
};

const getInitialState = (): CartType[] => {
  const local = localStorage.getItem("carts");
  if (local) {
    try {
      return JSON.parse(local);
    } catch {
      return [];
    }
  }
  return [];
};

const initialState: CartType[] = getInitialState();

export const cartReducer = (
  state: CartType[] = initialState,
  action: ActionType
) => {
  let newState = state;
  switch (action.type) {
    case "addCart": {
      const checkCart = state.findIndex(
        (cart) => cart.id === action.payload.id
      );
      if (checkCart !== -1) {
        newState = newState.map((cart, idx) =>
          idx === checkCart ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
      } else {
        newState = [
          ...state,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          },
        ];
      }
      break;
    }
    case "removeCart": {
      newState = state.filter((cart) => cart.id !== action.payload.id);
      break;
    }
    default:
      newState = state;
      break;
  }
  localStorage.setItem("carts", JSON.stringify(newState));

  return newState;
};
