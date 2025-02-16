function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }

    if(typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || 
        typeof obj.schoolGrade !== 'number' || 
        typeof obj.isFFamily !== 'boolean'){

            return "Invalid Input";
    }
   let finalScore = obj.testScore + obj.schoolGrade;
   if(obj.isFFamily === true){
    finalScore = finalScore + 20;
   }
   
   if (finalScore >= 80) {
     return true;
   } else {
    return false;
   }
   
}

// const information = {name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true};
// let result = calculateFinalScore(information);
// console.log(result);