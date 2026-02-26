const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const signUpPage = document.getElementById("signUpPage");
const successMsg = document.getElementById("successMsg");
const dismissBtn = document.getElementById("dismissBtn");

function handleSubmit(e) {
  e.preventDefault();

  if (!emailInput.validity.valid) {
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("error");
  } else {
    errorMsg.classList.add("hidden");
    emailInput.classList.remove("error");
    signUpPage.classList.add("invisible-el");
    successMsg.classList.remove("invisible-el");
  }
}

form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", function () {
  signUpPage.classList.remove("invisible-el");
  successMsg.classList.add("invisible-el");
});

emailInput.addEventListener("input", function () {
  errorMsg.classList.add("hidden");
  emailInput.classList.remove("error");
});
