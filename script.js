/*
Write some JavaScript! It should:
1. Set a temperature as a variable (a number). Assume this is a Fahrenheit temperature.
2. Calculate the temperature conversion to Celsius. 3. Log the converted temperature to the console.

*/
var input_type=prompt("Enter you starting point: C for Celsius, F for Fahrenheit");
var input_temp=parseInt(prompt("Enter your starting temp"));

var cel_to_f =function(temp){
  var end_temp=(temp*(9/5)+32).toFixed(2);
  console.log("Starting temp",temp,"degrees C, ending temp:",end_temp," degrees F");
  return 0;
}

var f_to_cel =function(temp){
  
  var end_temp=((temp- 32) * (5/9))
  console.log("Starting temp:",input_temp,"degrees F, ending temp:",end_temp.toFixed(2)," degrees C.");
  return 0;
}

switch(input_type){
  case "c":
    cel_to_f(input_temp);
    break;
    
    case "C":
    cel_to_f(input_temp);
    break;
    
    case "F":
    f_to_cel(input_temp);
    break;
    
       case "f":
    f_to_cel(input_temp);
    break;
    
  default:
    console.log("Error, check your input!");
    break;
}