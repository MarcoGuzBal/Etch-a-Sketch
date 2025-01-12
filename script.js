
/* const button = document.querySelector("gridButton") */
const input = document.getElementById("size")
const button = document.getElementById("gridButton")

const grid = document.querySelector(".grid");
var gridSizeVar = document.querySelector(':root');

function createGrid(gridSize){
    const totalGridSize = 409600
    const numOfCells = gridSize * gridSize
    const sizeOfCells = Math.sqrt(totalGridSize/numOfCells)
    
    gridSizeVar.style.setProperty("--gridSize", `${sizeOfCells}px`);

    /* Removes the previous grid by removing grid's child */
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    /* Adds a div to the grid container based on the input value given */
    for(let i = 0; i<gridSize * gridSize; i++){
        const gridBox = document.createElement("div");
        gridBox.textContent = i 
        grid.appendChild(gridBox)
    }
}

button.addEventListener('click', function() {

    input.focus()

    listInput = input.value;
    input.value = "";

    createGrid(listInput)
    
});

