"use strict";

/*=====================ProtocolsChange=========================*/

let protocols = document.querySelector("select");
let options = protocols.querySelectorAll("option");
let btn = document.querySelector("#btn");
let val1 = document.querySelector("#val1");
let main = document.querySelector(".main");
let sterilityAssessment = document.querySelector("#sterilityAssessment");

// Клонирование таблицы и изменение ее id
let table = sterilityAssessment.cloneNode(true);
table.id = "table123";
main.appendChild(table);
let d = document.querySelector("#table123");

protocols.addEventListener("change", function () {
  if (protocols.value == "val1") {
    sterilityAssessment.style.display = "block";
  } else {
    sterilityAssessment.style.display = "none";
  }
  if (protocols.value == "val2") {
    d.style.backgroundColor = "red";
    d.style.display = "block";
  } else {
    d.style.display = "none";
  }
});

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
  dateFormat(date);
}

function dateFormat(date) {
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

dateFormat(verificationDate);

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

// sowingDate.addEventListener("click", (event) => changeData(sowingDate, event));

// function changeData(elem, event) {
//   let input = document.createElement("input");
//   input.value = elem.textContent;
//   elem.innerHTML = "";
//   console.log("why");
//   elem.append(input);
//   elem.removeEventListener("click", changeData);

//   console.log(event.target.className, elem.textContent);

//   input.addEventListener("blur", () => {
//     elem.innerHTML = input.value;
//     input.remove();
//     elem.addEventListener("click", changeData);
//     console.log(2);
//   });
// }

/*=====================ResultDate=========================*/

let resultDate = document.querySelector(".resultDate");

dateFormat(resultDate);
