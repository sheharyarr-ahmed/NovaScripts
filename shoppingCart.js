//exporting module
// console.log("EXPORTING MODULE.");
// console.log("start fetcing in shopping cart");
// const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
// const data = await res.json();
// console.log(data);
// console.log("fnished fetching in the shopping cart");
// the above code was removed because while npx parcel index.html was causing eh problems.

console.log("EXPORTING MODULE.");

async function loadUsers() {
  console.log("start fetching in shopping cart");
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
  console.log("finished fetching in the shopping cart");
}
loadUsers();

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
