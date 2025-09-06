import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
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
