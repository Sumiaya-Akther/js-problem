function checkDigitsInName(name) {
if(typeof name !== "string"){
    return "Invalid Input";
}
    // let constainsDigit = false;
    // for(let i = 0; i < name.length; i++){
    //     let char = name[i];

    //     // if(!isNaN(char) && char !== ''){
    //     //   constainsDigit = true;
    //     //   break;
    //     // }

    //     if (char >= '0' && char <= '9'){
    //         constainsDigit = true;
    //         break;
    //     }
    // }

    // another system----->

    for(const word of name){
        if(!isNaN(word)){
            return true;
        }
    }
    return false;

    //return constainsDigit;
    
}

let result = checkDigitsInName('rokib');
console.log(result);
