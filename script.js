const dateofbirth = document.querySelector("#date-of-birth")
const luckyno = document.querySelector("#lucky-number")
const checkbdaybutton = document.querySelector("#check-bday")
const outputbox = document.querySelector("#output-box")

function compareValues(sum, luckyno) {
  if (sum % luckyno == 0)
    outputbox.innerText = "Birthday is lucky :)"
  else
    outputbox.innerText = "Birthday is not lucky :("
}

function checkBdayIsLucky() {
  if (luckyno.value == "") {
    outputbox.style.color = "red";
    outputbox.innerText = "Please enter your lucky number";
  }
  else if (luckyno.value <= 0) {
    outputbox.style.color = "red";
    outputbox.innerText = "Lucky number should be greater than 0.";
  }
  else if (dateofbirth.value == "") {
    outputbox.style.color = "red";
    outputbox.innerText = "Please choose your birthday";
  }
  else {
    const dob = dateofbirth.value
    const sum = calculateSum(dob)
    if (dob && sum)
      compareValues(sum, luckyno)
    else
      outputbox.innerText("Please enter valid information")
  }

}

function calculateSum(date) {
  date = date.replaceAll("-", "")
  let s = 0
  for (let i = 0; i < date.length; i++) {
    s += Number(date.charAt(i))
  }
  return s
}
checkbdaybutton.addEventListener('click', checkBdayIsLucky)
