// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
var btn = document.getElementById("justin-btn");
var result = document.getElementById("result");

btn.addEventListener("mouseover", mouseover);
btn.addEventListener("mouseout", mouseout);

function mouseover(){
    result.style = "color: blue; background-color: pink;";
    result.innerText = "Welcome to My Heart";
}

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
function mouseout(){
    result.style = "color: red; background-color: black;";
    result.innerText = "Don't Leave Me Please";
}