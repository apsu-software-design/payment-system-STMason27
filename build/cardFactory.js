const paymentExecuter = require('./payment_systems');
var readlineSync = require("readline-sync"); //for easier repeated prompts
class cardFactory{

    constructor(){
        //var _name, _payOPtion, _date;
    }

    build(pay, _name, _payOPtion, _date){
      var psc =  new paymentExecuter.PaymentSystemContext(pay, _name, _payOPtion, _date); // required methods?
    }

    getExector(){
        return this.psc;
    }

    strategy(x){ // selects the payment system
        switch (x) { //handle each response
            case 'creditcard':
                this.build(x, readlineSync.question('  Name: '), readlineSync.question('  Credit Card Number: '), readlineSync.question('  Credit Card Expiration Date (MM/DD): '));
                this.getExector();
                break;
            case 'bankdraft':
                this.build(x, readlineSync.question('  Name: '), readlineSync.question('  Bank Routing Number: '), readlineSync.question('  Bank Account Number: '));
                this.getExector();
                break;
            case 'onlinepayment':
                this.build(x, readlineSync.question('  Enter Your Email Address: '), readlineSync.question('  Enter Your Payment Password: '), null);
                this.getExector();
                break;
            case 'offlinepayment':
                this.build(x, readlineSync.question('  Name: '), readlineSync.question('  Enter Your Billing Address: '), null);
                this.getExector();
                break;
            default: console.log('Invalid option!');
        }
    }

}
module.exports = { cardFactory }