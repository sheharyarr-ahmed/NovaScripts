import cloneDeep from "lodash-es";
import * as ShoppingCart from "./shoppingCart.js";
const state = {
  user: "sheharyar",
  parents: {
    father: "shakeel ahmed",
    mother: "woman",
  },
  currentState: true,
};
const stateCopy = Object.assign({}, state);
console.log(stateCopy);

state.currentState = false;
console.log(state);
console.log(stateCopy);

const deepCopy = cloneDeep(state);
console.log(deepCopy);
state.currentState = true;
console.log(state);
console.log(deepCopy);

ShoppingCart.addNum(2, 3);

if (module.hot) {
  module.hot.accept();
}
