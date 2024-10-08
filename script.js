// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    document.getElementById("grid").addEventListener("click", function(e){
        if(e.target.tagName == "TD")
            e.target.style.background = colorSelected;
    });
}

// Fill all uncolored cells
function fillU(){
    table = document.getElementById("grid").querySelectorAll("td");
    for (let i = 0; i < table.length; i++) {
        if (table[i].style.background === "")
            table[i].style.background = colorSelected;
    }
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}