function calculate() {

    // YOUR CODE GOES HERE
    var num1 = Number(document.getElementById('number1').value);
    var num2 = Number(document.getElementById('number2').value);

    var sum = 0;
    for (var i=num1; i<=num2; i++){
        sum += i
    }

    console.log(sum);

    var result = document.getElementById("result");
    result.innerText = "The sum is: " + sum;
    
}

