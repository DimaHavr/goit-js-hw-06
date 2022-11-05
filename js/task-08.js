const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail.length === 0 || password.length === 0) {
    alert("Всі поля повинні бути заповнені!!!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);

    document.querySelector(".login-form").reset();
  }
}
