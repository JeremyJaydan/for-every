
// const $for = window["for-next"];
const $for = require("./for-next");

// let pages = [["a", 1, 2], ["b", 1, 3], ["c", 1, 4]];
const pages = [];

$for(pages, (page, {next:nextPage}) => {
  $for(page, (product, {next:nextProduct}) => {

    console.log("Product: ", product);
    nextProduct();

  }).then(nextPage);
})
  .catch(console.error)
;

// // iterate over each product page
// $for(allProductsPages, (page, {next: nextPage}) => {
//   console.log(1);
//   // iterate over each product
//   $for(page, async (product, {next: nextProduct}) => {
//     console.log(2);
//     // ...
//   }).then(result => {
//     console.log(3);
//     //Proceed to the next product page
//     nextPage();
//   });
// })
//   .then(result => {
//     console.log(error)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// ;