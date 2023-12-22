const button = document.getElementById("calculate-button");
var thatDay = document.getElementById("birth-day");
var thatMonth = document.getElementById("birth-month");
var thatYear = document.getElementById("birth-year");
var diffInYears = document.getElementById("result-years");
var diffInMonths = document.getElementById("result-months");
var diffInDays = document.getElementById("result-days");

function checkInputs() {
  if (thatMonth.value > 12) {
    thatMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    console.error("Month must be a 2-digit numberical value between 01 and 12.");
    return false;
  }

  if (thatYear.value > new Date().getFullYear()) {
    thatYear.style.border = "1px solid hsl(0, 100%, 67%)";
    console.error("Year must be a 4-digit numerical value before the current year.");
    return false;
  }

  if ((thatDay.value === "" || thatDay.value.length !== 2) && (thatMonth.value === "" || thatMonth.value.length !== 2) && (thatYear.value === "" || thatYear.value.length !== 4)) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    thatMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    thatYear.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if ((thatDay.value === "" || thatDay.value.length !== 2) && (thatMonth.value === "" || thatMonth.value.length !== 2)) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    thatMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if ((thatMonth.value === "" || thatMonth.value.length !== 2) && (thatYear.value === "" || thatYear.value.length !== 4)) {
    thatMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    thatYear.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if ((thatDay.value === "" || thatDay.value.length !== 2) && (thatYear.value === "" || thatYear.value.length !== 4)) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    thatYear.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if (thatDay.value === "" || thatDay.value.length !== 2) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if (thatMonth.value === "" || thatMonth.value.length !== 2) {
    thatMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else if (thatYear.value === "" || thatYear.value.length !== 4) {
    thatYear.style.border = "1px solid hsl(0, 100%, 67%)";
    return false;
  } else {
    let birthdate = new Date(thatYear.value, thatMonth.value - 1, thatDay.value);
    let today = new Date();

    let diffYears = today.getFullYear() - birthdate.getFullYear();
    let diffMonths = today.getMonth() - birthdate.getMonth();
    let diffDays = today.getDate() - birthdate.getDate();

    diffInYears.innerText = diffYears + " ";
    diffInMonths.innerText = diffMonths + " ";
    diffInDays.innerText = diffDays + " ";
    return true;
  }
}

function checkValidityofInputs() {
  // Checks Jan, Mar, May, Jul, Aug, Oct and Dec.
  if ((thatMonth.value === "01" || thatMonth.value === "03" || thatMonth.value === "05" || thatMonth.value === "07" || thatMonth.value === "08" || thatMonth.value === "10" || thatMonth.value === "12") && (thatDay.value > 31)) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    console.error("ERROR: Month " + thatMonth.value + " has a max of 31 days.");
    return false;

    // Checks Apr, Jun, Sep and Nov.
  } else if ((thatMonth.value === "04" || thatMonth.value === "06" || thatMonth.value === "09" || thatMonth.value === "11") && (thatDay.value > 30)) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    console.error("ERROR: Month " + thatMonth.value + " has a max of 30 days.");
    return false;

    // Checks Feb.
  } else if (thatMonth.value === "02" && thatDay.value > 28) {
    thatDay.style.border = "1px solid hsl(0, 100%, 67%)";
    console.error("ERROR: Month " + thatMonth.value + " has a max of 28 days.");
    return false;
  }
}

button.addEventListener("click", () => {
  checkInputs();
  checkValidityofInputs();
});