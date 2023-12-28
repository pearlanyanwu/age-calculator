const button = document.getElementById("calculate-button");
var birthDay = document.getElementById("birth-day");
var birthMonth = document.getElementById("birth-month");
var birthYear = document.getElementById("birth-year");
var ageInYears = document.getElementById("result-years");
var ageInMonths = document.getElementById("result-months");
var ageInDays = document.getElementById("result-days");
const regexDay = /^(0[1-9]|[12][0-9]|3[0-1])$/;
const regexMonth = /^(0[1-9]|1[0-2])$/;
const regexYear = /^(19|20)\d{2}$/;
const today = new Date();

button.addEventListener("click", () => {
  // If the year format is not correct OR if the year format is correct but out of range.
  if ((!regexYear.test(birthYear.value)) || (regexYear.test(birthYear.value) && birthYear.value >= today.getFullYear())) {
    birthYear.style.borderColor = "red";
    console.error("Year must be a 4-digit input between 1990 and 2023.");
  } else {
    ageInYears.innerText = (today.getFullYear() - birthYear.value) + " ";
  }

  // If the month format is not correct OR if the month format is correct but out of range.
  if ((!regexMonth.test(birthMonth.value)) || (regexMonth.test(birthMonth.value) && (birthMonth.value < 1 || birthMonth.value > 12))) {
    birthMonth.style.borderColor = "red";
    console.error("Month must be a 2-digit input between 01 through 12.");
  } else {
    ageInMonths.innerText = (today.getMonth() - birthMonth.value) + " ";
  }

  // If the day format is not correct.
  if (!regexDay.test(birthDay.value)) {
    birthDay.style.borderColor = "red";
    console.error("Day must be a 2-digit input between 28, 30 or 31. Refer to the number of days in the month.");
  } else {
    // If the day format is correct, but out of range.
    if ((birthDay.value > 28) && (birthMonth.value == "02")) {
      birthDay.style.borderColor = "red";
      console.error(`Month ${birthMonth.value} only has 28 days.`);
    } else if ((birthDay.value > 30) && (birthMonth.value == "04" || birthMonth.value == "06" || birthMonth.value == "09" || birthMonth.value == "11")) {
      birthDay.style.borderColor = "red";
      console.error(`Month ${birthMonth.value} only has 30 days.`);
    } else if ((birthDay.value > 31) && (birthMonth.value == "01" || birthMonth.value == "03" || birthMonth.value == "05" || birthMonth.value == "07"
      || birthMonth.value == "08" || birthMonth.value == "10" || birthMonth.value == "12")) {
      birthDay.style.borderColor = "red";
      console.error(`Month ${birthMonth.value} only has 31 days.`);
    } else {
      ageInDays.innerText = (today.getDate() - birthDay.value) + " ";
    }
  }
});