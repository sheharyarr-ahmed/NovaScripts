import "./shoppingCart.js";
// console.log("starting to fetch");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log(
//   "you can see this that the await in the modules can be work outside of the async function block the code execution, as it will not logged before the json is being converted unlike asynchronus function"
// );

// top-level await in action
console.log("now top level await is starting");
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};
// this will return the promsie because an async function always returns an promise
// const lastPost = getLastPost();
// console.log(lastPost);

//this way promsie is not retuned instead the returned value is given.
const lastPost = await getLastPost();
console.log(lastPost);

// if the being imported module has the top level await the file that is importing then the code will block the importing file until the awaitis resolved in the being imported file
