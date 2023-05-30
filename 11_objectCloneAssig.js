const bankSbi = {
    bankName : 'SBI Bank',
    accountNo : 254864215766,
    ifsc : 'SBIN0001110',
    accountType : 'Saving Account'
};

const bankLocation = {
    street : 'J M road',
    city : 'Pune',
    pin : 400078
};

Object.assign(bankSbi,bankLocation);
console.log(`cloning the object is--Bank name: ${bankSbi.bankName}, Account no: ${bankSbi.accountNo}, IFSC: ${bankSbi.ifsc}, Account: ${bankSbi.accountType}, Street: ${bankSbi.street}, City: ${bankSbi.city}, Pin: ${bankSbi.pin} `);
console.table(bankSbi);

const rateOfInterest = {
    homeLoanInterest : '8.50% p.a.',
    personalLoanInterest : '11.25 p.a.',
    dueInterest : '3.50% p.m.'
};

console.log(`---------------------------------------------------------`);
console.log(`Merge the bankSbi, bankLocation and rateOfInterest object in new object`);
console.log(``);
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log(`Bank name: ${sbiDetails.bankName}, Account no: ${sbiDetails.accountNo}, IFSC: ${sbiDetails.ifsc}, Account: ${sbiDetails.accountType}, Street: ${sbiDetails.street}, City: ${sbiDetails.city}, Pin: ${sbiDetails.pin} Home Loan Ineterst: ${sbiDetails.homeLoanInterest} Personal Loan Interest: ${sbiDetails.personalLoanInterest} Due Interest: ${sbiDetails.dueInterest}`);
console.table(sbiDetails);

console.log(`---------------------------------------------------------`);
console.log(`Traversing merged object`);
for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        const value = sbiDetails[key];
        console.log(`${key} : ${value}`);
        
    }
}
