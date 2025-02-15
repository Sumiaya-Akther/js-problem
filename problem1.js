function calculateTax(income, expense) {
    if(typeof income !== "number" ||
         income < 0 || 
          typeof expense !== "number" ||
           expense < 0 ||
            income < expense)
            {
        return "Invalid Input";
    }
    let taxableAmount = income - expense;
    // console.log(taxableAmount);
    let tax = taxableAmount * 20/100;
    // console.log(tax);
     return tax;
 }

// const result = calculateTax(10000, 3000);
// console.log(result);