// * -------------
// color the active page
let simplePage = document.getElementById("simple");
let hexPage = document.getElementById("hex");

function activePage() {
  simplePage.classList.remove("active-page");
  hexPage.classList.add("active-page");
}

hexPage.onclick = activePage();
// * -------------

let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  // loop (6 times (#123456))
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  let res = Math.random() * hex.length;
  let lastRes = Math.floor(res);
  return lastRes;
}
