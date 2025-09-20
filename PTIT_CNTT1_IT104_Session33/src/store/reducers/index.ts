import { combineReducers } from "redux";
import { shoppingReducer } from "./shoppingReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  shopping: shoppingReducer,
  cart: cartReducer,
});
export default rootReducer;
