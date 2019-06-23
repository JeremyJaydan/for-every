
const $for = require("./");


// $for(["cat", "dog", "dingo"], (animal, {next}) => {

//   console.log("animal: ", animal);
//   // The iterator won't continue if you don't invoke next().
//   // the object specified can have a value property
//   // which the iterator collects all values to output when resolved.
//   next({value: {isCat: animal === "cat"}})

// // The interval is the amount of time in milliseconds
// // to wait per iteration. If you set this to 0 (or don't specify),
// // the iterator won't use setTimeout (so be careful of stackoverflows)
// }, {interval: 500})
//   .then(values => {

//     const cats = values.filter(animal => animal.isCat);
//     console.log("Cats: ", cats.length);

//   })
// ;

const countdown = 5;
$for(countdown, (index, {next, skip, ctx}) => {

  let count = countdown - index + 1;

  if(count <= 3){
    if(ctx.counted){
      count -= .5;
      next({value: count});
    }else{
      // You can skip forward/backward
      next({skip: -1, value: count});
      // The ctx variable is the context scoped to individual iterations (AND skipped iterations).
      // For example, if you skip to another iteration, it will pull the current context with it.
      ctx.counted =  true;
    }
  }else{
    next({value: count});
  }

  console.log(count);

}, {interval: 1000})
  .then(values => {
    console.log("Go!");
    console.log({values});
  })
;

/* OUTPUT */
// 5
// 4
// 3
// 2.5
// 2
// 1.5
// 1
// Go!
// { values: [ 5, 4, 3, 2.5, 2, 1.5, 1 ] }
