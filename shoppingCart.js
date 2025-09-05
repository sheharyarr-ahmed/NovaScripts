//exporting module
console.log("EXPORTING MODULE.");
export const abc = "hello"; //write export to import inside the importing modules.

export const addNum = function (a, b) {
  console.log(a + b);
};

export const age = 23;
export const name = "sheharyar";
export const cart = [];

const totalPrice = 1000;
const retailPrice = 1200;
//exporting multiple variables at once and can be imported in the importing module.
export { totalPrice, retailPrice as rp };

export const addToCart = function (item, quantity) {
  cart.push(item, quantity);
  console.log(`${quantity} ${item} has been added to your cart.`);
};

export const purchasedMobiles = [];
export const mobiles = function (company, model) {
  purchasedMobiles.push({ company, model });
};

//exporting defaults contains no names.
export default function (item, quantity) {
  cart.push(item, quantity);
  console.log(`${quantity} ${item} has been added to your cart.`);
}
