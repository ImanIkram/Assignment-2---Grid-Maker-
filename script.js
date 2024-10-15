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

    if (numRows > 0) {
    columns = table.rows[0].cells.length; 
    numCols=table.rows[0].cells.length; 
    } else {
    columns = 1; 
    numCols=1;
    }

    for (let i = 0; i < numCols; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; }; 
        newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
    numRows++;
}


// Add a column
function addC() {
    const table = document.getElementById("grid");

    if (table.rows.length == 0) {
        const Row = document.createElement("tr"); 
        const Cell = document.createElement("td"); 
        Cell.onclick = function() { this.style.backgroundColor = colorSelected; };
        Row.appendChild(Cell);
        table.appendChild(Row); 
        numRows=1;
    }
  else{
    for (let row of table.rows) {
        const cell = document.createElement("td");
        cell.onclick = function() { this.style.backgroundColor = colorSelected; };
        row.appendChild(cell); // Use 'row' directly here
    }
}
    numCols++;
}



// Remove a row
function removeR() {
    const table = document.getElementById("grid");
    if(numRows!=0)
    {
       table.deleteRow(-1);
       numRows--;
       if(numRows==0)
       {
        numCols=0;
       }
    }
}

// Remove a column
function removeC() {
    const table = document.getElementById("grid");
    var x= table.rows.length;
    if(numCols!=0)
    {
    for(let i=0; i<x;i++){
        table.rows[i].deleteCell(-1);
    }
    numCols--;
    if(numCols==0){
       
        for(let i=0;i<numRows;i++)
        {
            table.deleteRow(0);
        }
        numRows=0;
    }
    }
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
