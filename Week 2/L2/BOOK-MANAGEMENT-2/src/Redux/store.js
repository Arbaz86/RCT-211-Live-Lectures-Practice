import { reducer as bookReducer } from "./Book/reducer";
import { compose, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  bookReducer,
  composeEnhancers(applyMiddleware(thunk))
);
