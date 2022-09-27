const dateofbirth=document.querySelector("#date-of-birth")
const luckyno=document.querySelector("#lucky-number")
const checkbdaybutton=document.querySelector("#check-bday")
const outputbox=document.querySelector("#output-box")

function compareValues(sum,luckyno){
  if(sum%luckyno==0)
    outputbox.innerText="Birthday is lucky :)"
  else 
    outputbox.innerText="Birthday is not lucky :("
}

function checkBdayIsLucky(){
  const dob=dateofbirth.value
  const sum=calculateSum(dob)
  if(dob && sum)
    compareValues(sum,luckyno)
  else
    outputbox.innerText("Please enter valid information")
}

function calculateSum(date){
  date=date.replaceAll("-","")
  let s=0
  for(let i=0;i<date.length;i++){
    s+=Number(date.charAt(i))
  }
  return s
}
checkbdaybutton.addEventListener('click',checkBdayIsLucky)