module.exports = function toReadable (number) {

    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", 
    "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
    "sixteen", "seventeen", "eighteen", "nineteen"];
   // const firstDec = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dec = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let result = "";

    if (number < 20) result = numbers[number]; 
    else if (number < 100) {
        result = `${dec[(Math.trunc((number / 10)) - 2)]} ${numbers[number % 10]}`;
        if (result.includes(" zero")) result = result.substr(0, result.length - 5);
    } 
        else if (number === 100) result = "one hundred"; 
        else  {
            result = numbers[Math.trunc(number / 100)] + " hundred";
         let  newNumber = number % 100;
        
            if (newNumber < 20) result =  result + " " + numbers[newNumber]; else {
                result = result + " " + `${dec[(Math.trunc((newNumber / 10)) - 2)]} ${numbers[newNumber % 10]}`;
                if (result.includes(" zero")) result = result.substr(0, result.length - 5);
            }
     
        }

    if (result.includes(" zero")) result = result.substr(0, result.length - 5);



    return result;
  
}
