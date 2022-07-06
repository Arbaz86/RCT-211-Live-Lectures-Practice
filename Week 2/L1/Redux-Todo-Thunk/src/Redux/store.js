import { reducer } from "./reducer";
import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//redux thunk works as similar to this in side
// const costomMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     // its similar to getTodos(dispatch);
//     console.log(action);

//     return action(store.dispatch);
//   }
//   return next(action);
// };

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
