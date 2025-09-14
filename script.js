console.log("Task1");

function formatFullName(firstName, lastName) {

  if (!firstName || !lastName) {
    return "Invalid name input.";
  }

  function upperCasedName(name) {
    let upperCasedNames = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return upperCasedNames;
  }

  const formattedFirstName = upperCasedName(firstName);
  const formattedLastName = upperCasedName(lastName);

  //return lastName + ", " +firstName
  return `${formattedLastName}, ${formattedFirstName}`;
}

const firstInput = prompt('Enter first name:');
const secondInput = prompt('Enter last name:');

console.log(formatFullName(firstInput, secondInput));

//=============================================================================================================
console.log("Task2");

 function calculateTotalCost(price, quantity, taxRate) {

   function isValidNumber(input) {
     const number = Number(input);
     return !isNaN(number);
   }

   if (!isValidNumber(p) || !isValidNumber(q) || !isValidNumber(t)) {
     return "Invalid Input";
    
   }

   const clearPrice = Number(p);
   const clearQuantity = Number(q);
   const clearTaxRate = Number(t);
 
  const totalCost = (clearPrice * clearQuantity) * (1 + clearTaxRate)
   return totalCost
 }

 const priceInput = parseFloat(prompt('Enter price:'));
 const quantityInput = parseFloat(prompt('Enter quantity:'));
 const taxInput = parseFloat(prompt('Enter tax:'));

 console.log(calculateTotalCost(priceInput, quantityInput, taxInput));

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

const ageInput = prompt("What is your age?")
const employmentInput = prompt("You are employed. True or False")

console.log(checkEligibility(ageInput, employmentInput));


//=============================================================================================================
console.log("Task4");

function calculateTotalCost(price, quantity, taxRate, discount) {
  function isValidNumber(input) {
    const number = Number(input);
    return !isNaN(number) && input !== '';
  }
  if (!isValidNumber(price) || !isValidNumber(quantity) || !isValidNumber(taxRate)) {
    return "Invalid Input Number";
    
  }
  
  let hasDiscount = false;
  if(discount !== undefined){
    hasDiscount = isValidNumber(discount);
    if(!hasDiscount){
        return "Invalid Input";
    }
  }
  const cleanPrice = Number(price);
  const cleanQuantity = Number(quantity);
  const CleanTaxRate = Number(taxRate);
  const cleanDiscount = hasDiscount ? Number(discount) : 0;
 
    const totalCost = (cleanPrice * cleanQuantity - cleanDiscount) * (1 + CleanTaxRate)
 
  return totalCost
}

 const priceInput2 = parseFloat(prompt('Enter price:'));
 const quantityInput2 = parseFloat(prompt('Enter quantity:'));
 const taxInput2 = parseFloat(prompt('Enter tax:'));
 const discountInput2 = parseFloat(prompt('Enter discount:'));

console.log(calculateTotalCost(priceInput2, quantityInput2, taxInput2, discountInput2));