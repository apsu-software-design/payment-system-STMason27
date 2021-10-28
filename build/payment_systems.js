"use strict";

const { isConstructorDeclaration } = require("typescript");

Object.defineProperty(exports, "__esModule", { value: true });
//exports.PaymentSystemContext = void 0;
class PaymentSystemContext{  //var PaymentSystemContext = /** @class */ (function () {

   /* getInputs = function(arguments) {
        return arguments;
    };*/

    validate = function(paymentType, x, y, z)  {

        //var valid = /^[\w.' ]+$/.test(info);

        if(paymentType == 'creditcard'){
            var valid = /^[\w.' ]+$/.test(x) && /\d{15,16}/.test(y) && /\d\d\/\d\d/.test(z);
            
        }
        else if(paymentType == 'bankdraft'){
            var valid = /^[\w.' ]+$/.test(x) && /\d{9}/.test(y) && /\d{6,12}/.test(z);

        }
        else if(paymentType = 'onlinepayment'){
            var valid = /^[\w@.]+$/.test(x) && /\w+/.test(y);

        }
        else if(paymentType = 'offlinepayment'){
            var valid = /^[\w.' ]+$/.test(x) && /^[\w.' ]+$/.test(y);

        }
        else{
            console.log("Oops. Something broke.");
        }


        if(valid){
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
            return true;
        }
        else 
        console.log('The payment is invalid.');
            return false;

    }

    constructor(paymentType, x, y, z){
        var valid;
        this.valid = this.validate(paymentType, x, y, z); // both methods called here. inputs gathered and validated. 
    }


    execute = function(){

        // workflow
        //print info here
        if (this.valid) {
            console.log("Your payment information is being encrypted.");
            console.log("The payment is being processed.");
        }
        else {
            console.log('The payment is invalid.');
        }
    }




    /*
    function PaymentSystemContext() {
    }
    return PaymentSystemContext;
    */
//exports.PaymentSystemContext = PaymentSystemContext;
}
module.exports = { PaymentSystemContext }
