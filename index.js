/* Given Code, don't edit */

// document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(tS){
  var hour = parseInt(tS.split(":")[0]);
  if(hour < 12){
    return "Good Morning";
  }
  if(hour >= 12 && hour <= 17){
    return "Good Afternoon";
  }
  if(hour > 17 && hour <= 24){
    return "Good Evening";
  }
  throw "Invalid time entry." 
}
/* Write your implementation of displayMessage() */
function displayMessage(s){
  document.getElementById("greeting").innerText = s;
}