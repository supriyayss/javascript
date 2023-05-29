const sbiBank = {
    bankName : 'SBI Bank',
    location : 'Pune',
    accountNo : 254864215766,
    ifsc : 'SBIN0000454',
    interestRate : '2.70% p.a',
    showDetails : function(){
        console.log(`Bank Name: ${this.bankName} | Location: ${this.location} | Account No: ${this.accountNo} | IFSC: ${this.ifsc} | Interest Rate: ${this.interestRate}`);
    }
   
};
sbiBank.showDetails();

const axisBank = {
    bankName : 'Axis Bank',
    location : 'Mumbai',
    accountNo : 916024587654128,
    ifsc : 'UTIB0000004',
    interestRate : '3.50% p.a',
    showDetails : function (){
        console.log(`Bank Name: ${this.bankName} | Location: ${this.location} | Account No: ${this.accountNo} | IFSC: ${this.ifsc} | Interest Rate: ${this.interestRate}`);
    }

}
axisBank.showDetails();

const hdfcBank = {
    bankName : 'HDFC Bank',
    location : 'Satara',
    accountNo : 25468122547869,
    ifsc : 'HDFC0000790',
    interestRate : '8.65% p.a',
    showDetails : function (){
        console.log(`Bank Name: ${this.bankName} | Location: ${this.location} | Account No: ${this.accountNo} | IFSC: ${this.ifsc} | Interest Rate: ${this.interestRate}`);
    }

}
hdfcBank.showDetails();

const yesBank = {
    bankName : 'Yes Bank',
    location : 'Sangli',
    accountNo : 916024587654128,
    ifsc : 'YESB0000914',
    interestRate : '4% p.a',
    showDetails : function (){
        console.log(`Bank Name: ${this.bankName} | Location: ${this.location} | Account No: ${this.accountNo} | IFSC: ${this.ifsc} | Interest Rate: ${this.interestRate}`);
    }

}
yesBank.showDetails();