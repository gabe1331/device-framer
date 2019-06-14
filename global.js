let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("#form");

form.addEventListener("submit", e => {
  e.preventDefault();
  if (name.value === "" || email.value === "" || password.value === "") {
    console.log("complete fields");
  } else {
    console.log("success");
  }
});