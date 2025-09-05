//import module
//added type 'module' in the html script tag
import shoppingCart, * as ShoppingCart from "./shoppingCart.js"; //importing all the variables, function from shoppingCart.js as making ShoppingCart an object, now in order to access those values we write ShoppingCart.name
import { purchasedMobiles as pmobiles } from "./shoppingCart.js"; //renaming one of the property of shoppingcart from to pmobiles
// import { abc, addNum, age, arr, rp, totalPrice as tp } from "./shoppingCart.js";
console.log("IMPORTING MODULE");
// console.log(abc);
// addNum(2, 3);

// console.log(age);
// arr.push(2);
// console.log(arr);

// console.log(tp, rp);
console.log(ShoppingCart.cart);
console.log(ShoppingCart);
ShoppingCart.addToCart("milk", 1);
console.log(ShoppingCart.cart);

ShoppingCart.mobiles("apple", "iPhone");
ShoppingCart.mobiles("samsung", "galaxy");
console.log(ShoppingCart.purchasedMobiles);
console.log(pmobiles);

//imporitng export Defaults as it has no name so we add the name here as one module can contain one export defualt at one time
import addedExportDefault from "./shoppingCart.js";
addedExportDefault("bread", 2);
console.log(ShoppingCart.cart);
