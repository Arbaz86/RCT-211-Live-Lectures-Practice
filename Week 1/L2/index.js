const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
//action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "first redux action ",
  };
};

//action
const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};

//init state
// const initialState = {
//   numOfCakes: 10,
// };

const initCakeState = {
  numOfCakes: 10,
};

const initIceCreamState = {
  numOfIceCreams: 20,
};

const cakeReducer = (state = initCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default: {
      return state;
    }
  }
};

const iceCreamReducer = (state = initIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default: {
      return state;
    }
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
