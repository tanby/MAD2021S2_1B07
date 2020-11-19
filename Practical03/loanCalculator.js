console.log("loan calc started");

// classes
// copied from PRact 3 doc. start template
class Loan { 
    constructor(principal,interest,payment) { 
        this.principal = principal; // amount borrowed
        this.interest = interest; // monthly interest
        this.payment = payment; // number of months to repayment
    } 
}

class Repayment extends Loan {
    // Repayment has principal, interest and payment too
    // calculate using arrow function
    calculate = () => {
        // get (1+r)^N
        var x = Math.pow((1+this.interest), this.payment);
        var result = (this.interest * this.principal * x ) / (x-1);
        return result;
    }

}

// event handler function 
// when button click, get user inputs. 
function conversion(){
    console.log("convert now");
    // get the user input
    var principal = parseFloat(document.getElementById("One").value);
    var interest = parseFloat(document.getElementById("Two").value);
    var payment = parseFloat(document.getElementById("Three").value);
    // OWN YOUR OWN: do checking, eg, user input not a number
    // interest in % and annual, so how?
    interest = interest /100 / 12; 
    // payment period in years, so how?
    payment = payment *12;
    // create Repayment object so that we can use it. 
    var repayObj = new Repayment(principal, interest, payment);
    // test calculation
    console.log(repayObj.calculate());
    // total payment = mthly payment * num of mth
    var mthlyPayment = repayObj.calculate();
    console.log(mthlyPayment * payment);
    // total interest paid = total payment - amount borrowed
    var totalPayment = mthlyPayment * payment; // should reuse this earlier. but just for demo
    console.log(totalPayment - principal);
    // OWN YOUR OWN: show result in the text inputs
}

