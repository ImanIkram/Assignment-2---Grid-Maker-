// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function selectColor() {
    const colorSelect = document.getElementById("selectedColorId");
    colorSelected = colorSelect.value; 
    console.log("Selected color:", colorSelected); 
}

// Add a row
function addR() {
    const table = document.getElementById("grid");
    const newRow = document.createElement("tr");
    
   
    let columns; 

    if (table.rows.length > 0) {
    columns = table.rows[0].cells.length; 
    } else {
    columns = 1; 
    }

    for (let i = 0; i < columns; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; }; 
        newRow.appendChild(newCell);
    }

    table.appendChild(newRow);
}

// Add a column
function addC() {
    console.log("Add Column button clicked");
    const table = document.getElementById("grid");

    if (table.rows.length === 0) {
        const Row = document.createElement("tr"); 
        const Cell = document.createElement("td"); 
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        newRow.appendChild(Cell);
        table.appendChild(Row); 
    }

    for (let row of table.rows) {
        const cell = document.createElement("td");
        cell.onclick = function() { this.style.backgroundColor = colorSelected; };
        row.appendChild(cell); // Use 'row' directly here
    }


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
    let cells = document.getElementById("grid").querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = colorSelected;
    }
}

// Clear all cells
function clearAll(){
    let cells = document.getElementById("grid").querySelectorAll("td");
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.background = "";
    }
}