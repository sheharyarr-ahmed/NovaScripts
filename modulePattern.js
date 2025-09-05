//iifi was created first
const shoppingCart2 = (function () {
  //things which we may want to keep private and expose to the public
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237; //kept private as it was not retuned in the returned object
  const totalQuantity = 23;

  const addToCart = function (item, qunatity) {
    cart.push({ item, qunatity });
    console.log(
      `${qunatity}, ${item} Added to Cart, shipping cost will be ${shippingCost}`
    );
  };

  const orderStock = function (item, qunatity) {
    console.log(`${qunatity} ${item} has been ordered to supplier`);
  };

  return {
    //things that can be exposed to the public
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart("iPhone", 2);
console.log(shoppingCart2.cart);
console.log(shoppingCart2.shippingCost);
