import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import {
  compose,
  applyMiddleware,
  legacy_createStore,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ appReducer, authReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
