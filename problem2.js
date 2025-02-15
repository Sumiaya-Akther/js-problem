function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email"
    }
    let splittedEmail = email.split('@');
    const userName = splittedEmail[0];
    const domainName = splittedEmail[1];
    let newString = userName + " sent you an email from " + domainName
    return newString;
}
//  let result = sendNotification('rokib.ph@gmail.com');
//  console.log(result);