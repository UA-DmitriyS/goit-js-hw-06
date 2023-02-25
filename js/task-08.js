const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailEl = document.querySelector("[type=email]");
  const passwordEl = document.querySelector("[type=password]");

  if (emailEl.value === " " || passwordEl.value === "") {
    alert("Заповніть всі поля");
    return;
  }
  const object = {
    email: emailEl.value,
    password: passwordEl.value,
  };
  console.log(object);
  formEl.reset();
});
