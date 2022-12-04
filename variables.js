//  let val = undefined or var val = undefined // This is bug. When we assign undefined values
//  Variable declared by let cannot be redeclared but it's value can be reassigned.
//  Variable declared by const neither can be redeclared nor can be reassigned.
//  Variable declared by var can redeclared and reassigned too.
// let val;
// console.log(val); // undefined

// const val;
// console.log(val) // syntax error

// console.log(val);
// let val;
// val = 34; // Reference Error

// var val = 30;
// var val = 20;
// val = 45;
// console.log(val);

// console.log(val);
// var val = 5; //undefined

// var val = undefined;
// console.log(val);

// let $name = "Randeep";
// let _name = "Randeep";
// const _naam = "Randeep";

// Any variable should start with Alphabetic characters, $ or _ ,
//  but it can't begin with number or any other character.
