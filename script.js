const button = document.getElementById("calculate-button");
var birthDay = document.getElementById("birth-day");
var birthMonth = document.getElementById("birth-month");
var birthYear = document.getElementById("birth-year");
var ageInYears = document.getElementById("result-years");
var ageInMonths = document.getElementById("result-months");
var ageInDays = document.getElementById("result-days");
const regexDays = /^(0[1-9]|[12][0-9]|3[0-1])$/; // 01-09, 10-29, 30-31
const regexMonths = /^(0[1-9]|1[0-2])$/; // 01-09, 10-12
const regexYears = /^(19|20)\d{2}$/; // 1900-(current year)
var today = new Date();

button.addEventListener("click", () => {
  if (!regexDays.test(birthDay.value)) {
    birthDay.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    ageInDays.innerText = today.getDate() - birthDay.value + " ";
  }

  if (!regexMonths.test(birthMonth.value)) {
    birthMonth.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    ageInMonths.innerText = today.getMonth() - birthMonth.value + " ";
  }
  
  if (regexYears.test(birthYear.value) && birthYear.value > new Date().getFullYear() || !regexYears.test(birthYear.value)) {
    birthYear.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    ageInYears.innerText = today.getFullYear() - birthYear.value + " ";
  }
})