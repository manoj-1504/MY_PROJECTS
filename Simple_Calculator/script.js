function calculate() {

    const num1 = parseFloat(document.querySelector("#num1").value);
    const num2 = parseFloat(document.querySelector("#num2").value);
    const operator = document.getElementById("operator").value;

    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            alert("Please enter your Input..");
    }
    document.getElementById("result").value = "" + result;
    
    if (result == undefined || isNaN(result)) {
        document.getElementById("result").value = "";
    }
    
};

function reset() {
    document.getElementById("result").value = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "" ;
    document.getElementById("operator").value = "";
};


