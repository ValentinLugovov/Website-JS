"use strict";

/*=====================ProtocolsChange=========================*/

let protocols = document.querySelector("select");
let options = protocols.querySelectorAll("option");
let btn = document.querySelector("#btn");
let div = document.querySelector(".show");

// protocols.addEventListener("change", function () {
//   console.log(this.value);
//   // div.classList.add('show')
//   table1();
// });

/*=====================SerialNumber=========================*/

let serialNumbers = document.querySelectorAll(".serialNumber");

for (let number of serialNumbers) {
  number.addEventListener("click", function func() {
    let input = document.createElement("input");
    input.value = number.textContent;
    number.textContent = "";
    number.append(input);

    number.removeEventListener("click", func);

    input.addEventListener("blur", () => {
      number.textContent = input.value;
      input.remove();
      number.addEventListener("click", func);
    });
  });
}

/*=====================ExpirationDate=========================*/

let expirationDate = document.querySelectorAll(".expirationDate");
let data = new Date();

for (let date of expirationDate) {
  let month = data.getMonth() + 1;
  let day = data.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  date.textContent = day + "." + month + "." + data.getFullYear();
}

/*=====================VerificationDate=========================*/

let verificationDate = document.querySelector(".verificationDate");

let month = data.getMonth() + 1;
let day = data.getDate();

if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
verificationDate.textContent = day + "." + month + "." + data.getFullYear();

/*=====================SampleNumber=========================*/

let sampleNumber = document.querySelector(".sampleNumber");

sampleNumber.addEventListener("click", function func() {
  let input = document.createElement("input");
  input.value = sampleNumber.textContent;
  sampleNumber.textContent = "";
  sampleNumber.append(input);

  sampleNumber.removeEventListener("click", func);

  input.addEventListener("blur", () => {
    sampleNumber.textContent = input.value;
    input.remove();
    sampleNumber.addEventListener("click", func);
  });
});

/*=====================SampleVolume=========================*/

let sampleVolume = document.querySelector(".sampleVolume");

sampleVolume.addEventListener("click", function func() {
  let input = document.createElement("input");
  input.value = sampleVolume.textContent;
  sampleVolume.textContent = "";
  sampleVolume.append(input);

  sampleVolume.removeEventListener("click", func);

  input.addEventListener("blur", () => {
    sampleVolume.textContent = input.value;
    input.remove();
    sampleVolume.addEventListener("click", func);
  });
});

/*=====================SampleDate=========================*/

let sampleDate = document.querySelector(".sampleDate");

sampleDate.addEventListener("click", function func() {
  let input = document.createElement("input");
  input.value = sampleDate.textContent;
  sampleDate.textContent = "";
  sampleDate.append(input);

  sampleDate.removeEventListener("click", func);

  input.addEventListener("blur", () => {
    sampleDate.textContent = input.value;
    input.remove();
    sampleDate.addEventListener("click", func);
  });
});

/*=====================SowingDate=========================*/

let sowingDate = document.querySelector(".sowingDate");

sowingDate.addEventListener("click", function func() {
  let input = document.createElement("input");
  input.value = sowingDate.textContent;
  sowingDate.textContent = "";
  sowingDate.append(input);
  sowingDate.removeEventListener("click", func);

  input.addEventListener("blur", () => {
    sowingDate.textContent = input.value;
    input.remove();
    sowingDate.addEventListener("click", func);
  });
});

/*=====================ResultDate=========================*/

let resultDate = document.querySelector(".resultDate");

resultDate.textContent = day + "." + month + "." + data.getFullYear();
