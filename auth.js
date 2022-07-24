/*=====================Authorization=========================*/

let obj = {
  55183: ["Филиппова А.Ю", 123],
  12: ["Жопа с пальцем", 1],
  23: ["Палец в Жопе", 2],
  32: ["Корень Имбиря", 3],
};

let loginButton = document.querySelector("#loginButton");
let authWindow = document.querySelector("#myPrompt");
let tabNum = document.querySelector("#num1");
let password = document.querySelector("#num2");
let okbtn = document.querySelector("#okbtn");
let error = document.querySelector("#error");
let name = document.querySelector("#name");
let tabName = document.querySelector("#tabName");
let logoutButton = document.querySelector("#logoutButton");

loginButton.addEventListener("click", () => {
  authWindow.style.visibility = "visible";
});

okbtn.addEventListener("click", () => findLogin());

function findLogin() {
  for (let key in obj) {
    if (key == tabNum.value) {
      if (obj[key][1] == password.value) {
        name.textContent = obj[key][0];
        tabName.textContent = obj[key][1];
        tabNum.value = "";
        password.value = "";
        error.style.visibility = "hidden";
        loginButton.style.display = "none";
        logoutButton.style.display = "block";
        return (authWindow.style.visibility = "hidden");
      }
    } else {
      error.style.visibility = "visible";
    }
  }
}

logoutButton.addEventListener("click", () => {
  location.reload();
});

/*=====================PrintPDF=========================*/

function generatePDF() {
  const element = document.getElementById("sterilityAssessment");
  var opt = {
    margin: 0,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    //  pagebreak: { mode: ["css", "legacy"] },
  };
  html2pdf().set(opt).from(element).save();
}

let download = document.querySelector("#download");

download.addEventListener("click", () => generatePDF());

/*=====================Archive=========================*/

let archive = {};

// Сделать отдельный объект и туда сохранять pdf/jpeg/html?
// Нужно ли потом редактировать те файлы?
