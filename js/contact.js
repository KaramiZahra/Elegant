// password
let passwordInput = document.querySelector(".password-input");
let passwordBtn = document.querySelector(".password-btn");
let passwordBtnIcon = document.querySelector(".password-btn i");

passwordBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordBtnIcon.classList = "fa-solid fa-eye";
  } else {
    passwordInput.type = "password";
    passwordBtnIcon.classList = "fa-solid fa-eye-slash";
  }
});
// password preventions
passwordInput.addEventListener("copy", (e) => {
  e.preventDefault();
});
passwordInput.addEventListener("cut", (e) => {
  e.preventDefault();
});
passwordInput.addEventListener("paste", (e) => {
  e.preventDefault();
});

// countries and cities
let countrySelect = document.querySelector(".country");
let citySelect = document.querySelector(".city");

let locationDB = {
  America: ["California", "Washington", "Chicago", "Boston", "Arizona"],
  Canada: ["Toronto", "Vancouver", "Montreal"],
  Germany: ["Berlin", "Munich", "Frankfurt", "Cologne"],
  France: ["Paris", "Lyon"],
  Turkey: ["Izmir", "Istanbul", "Bursa", "Antalya", "Mersin"],
};

countrySelect.addEventListener("change", function () {
  if (countrySelect.value === "Select Country") {
    citySelect.innerHTML = "";
    citySelect.innerHTML = "<option>Select City</option>";
  } else {
    let countryValue = countrySelect.value;
    let cityValue = locationDB[countryValue];

    citySelect.innerHTML = "";
    cityValue.forEach((city) => {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});

// required inputs
let fnameInput = document.querySelector(".fname-input");
let lnameInput = document.querySelector(".lname-input");
let emailInput = document.querySelector(".email-input");
let submitBtn = document.querySelector(".submit-btn");

function validateInput(inputElement) {
  if (inputElement.value === "") {
    inputElement.style.border = "1.5px solid red";
  } else {
    inputElement.style.border = "1px solid #5f5f5f";
  }
}

submitBtn.addEventListener("click", () => {
  validateInput(fnameInput);
  validateInput(lnameInput);
  validateInput(emailInput);
});
