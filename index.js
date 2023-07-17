function scuberGreetingForFeet(someNumber){
  //console.log("This is the parameter some number: ", someNumber)
  if (someNumber <= 400) {
    // block of code
    return "This one is on me!"
  }

  if (someNumber<=2000) {
    return "That will be twenty bucks."
  }

  if (someNumber >2000 && someNumber <=2500) {
    return "I will gladly take your thirty bucks."

  }

  if (someNumber >2500) {
    return "No can do."
  }
}



//console.log (scuberGreetingForFeet(4567))

function ternaryCheckCity(City) {

  const message = City == "NYC" ? "Ok, sounds good." : "No go.";
  return (message)
}

ternaryCheckCity("NYC")

  // Write your code here!


function switchOnCharmFromTip(tip){

  let response;
  
  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
        break;
    default: 'Thanks for everything'
      response = 'Bye.';
      break; 
  }
    return (response) }
  // Write your code here!
