// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  }
  else if (someValue > 2000 && someValue < 2501) {
    greeting = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500) {
    greeting = 'No can do.'
  }
  return greeting
}

function  ternaryCheckCity(city) {
  let answer
  (city === NYC ? answer = 'Ok, sounds good.' : answer = 'No go.');
  return answer
}

function switchOnCharmFromTip() {

}
