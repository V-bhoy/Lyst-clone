import { combineReducers, legacy_createStore as createStore } from "redux";
import { ProductsReducer } from "./reducer";

const rootReducer = combineReducers({
  products: ProductsReducer,
});

export const store = createStore(rootReducer);
