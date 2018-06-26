//add your code here

let number1 =$("#number1")
let operator =$("#operation")
let number2 =$("#number2")


function validate(operator, number1, number2){
  if (operator == "+" || operator == "-" ||operator == "/" ||operator == "*")
  {
  if (isNaN(number1) || number1 == "" || isNaN(number2) || number2 == "" ) 
  $("#result").text("Sorry, one of those is not a valid number!")
  ;
  
  } else {
  answer(operator, number1, number2);
    }
  }
  else {
    $("#result").html("Sorry, that is not a valid operator.")
  }
}