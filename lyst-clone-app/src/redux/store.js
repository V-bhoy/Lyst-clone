// create store here
import {
    applyMiddleware,
    legacy_createStore as createStore,
    compose,
  } from "redux";
  import thunk from "redux-thunk";
  import { cartReducer } from "./reducer";
  
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );
  
  export const store = createStore(cartReducer, enhancer);
  
  // do not remove this code, its for testing purpose
  