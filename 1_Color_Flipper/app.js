// * -------------
// color the active page
let simplePage = document.getElementById("simple");
let hexPage = document.getElementById("hex");
console.log(simplePage);
function activePage() {
  simplePage.classList.add("active-page");
  hexPage.classList.remove("active-page");
}

simplePage.onclick = activePage();
// * -------------

let colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between 0 and 3
  let randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  // random() not inculding 1
  let res = Math.random() * colors.length;
  let lastRes = Math.floor(res);
  return lastRes;
}
