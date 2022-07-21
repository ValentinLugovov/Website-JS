"use strict";

let protocols = document.querySelector("select");
let options = protocols.querySelectorAll("option");
let btn = document.querySelector("#btn");
let div = document.querySelector(".show");

protocols.addEventListener("change", function () {
  console.log(this.value);
  // div.classList.add('show')
  table1();
});

// btn.addEventListener("click", () => {
//   div.classList.toggle("show");
// });

// function table1() {
//   let table1 = document.createElement('table')
//   div.append(table1)
// }

