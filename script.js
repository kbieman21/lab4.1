console.log("Task1");

function formatFullName(firstName, lastName) {
  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  function upperCasedName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }

  const formattedFirstName = upperCasedName(firstName);
  const formattedLastName = upperCasedName(lastName);

  //return lastName + ", " +firstName
  return `${formattedLastName}, ${formattedFirstName}`;
}

console.log(formatFullName("kibreab", "solomon"));

//=============================================================================================================
console.log("Task2");

 function calculateTotalCost(p, q, t) {

   function isValidNumber(input) {
     const number = Number(input);
     return !isNaN(number);
   }
   if (!isValidNumber(p) || !isValidNumber(q) || !isValidNumber(t)) {
     return "Invalid Input";
    
   }
   const price = Number(p);
   const quantity = Number(q);
   const taxRate = Number(t);
 
  totalCost = (price * quantity) * (1 + taxRate)
   return totalCost
 }

 console.log(calculateTotalCost(100, 2, 0.1));

//=============================================================================================================
console.log("Task3");
function checkEligibility(age, isEmployed){

    if(age > 18 && isEmployed){
        return "You are eligible";
    }else if(age > 18 && !isEmployed){
        return "You are conditionally eligible"
    }else{
        return "You are not eligible"
    }
}

console.log(checkEligibility(19, false));


//=============================================================================================================
console.log("Task4");

function calculateTotalCost(price, quantity, taxRate, discount) {

   
  function isValidNumber(input) {
    const number = Number(input);
    return !isNaN(number) && input !== '';
  }
  if (!isValidNumber(price) || !isValidNumber(quantity) || !isValidNumber(taxRate)) {
    return "Invalid Input";
    
  }

  let hasDiscount = false;
  if(discount !== undefined){
    hasDiscount = isValidNumber(discount);
    if(!hasDiscount){
        return "Invalid Input";
    }
  }
  const priceM = Number(price);
  const quantityM = Number(quantity);
  const taxRateM = Number(taxRate);
  const discountM = hasDiscount ? Number(discount) : 0;
 
     totalCost = (price * quantity - discountM) * (1 + taxRate)
 
  return totalCost
}

console.log(calculateTotalCost(100, 2, 0.1, 15));