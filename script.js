const button = document.querySelector("#portfolio-button");
const message = document.querySelector("#coming-soon");

button.addEventListener("click", function () {
  message.textContent = "Coming soon...";
});