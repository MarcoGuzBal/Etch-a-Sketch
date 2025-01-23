
/* const button = document.querySelector("gridButton") */
const input = document.getElementById("size")
const button = document.getElementById("gridButton")

const grid = document.querySelector(".grid");
var gridSizeVar = document.querySelector(':root');

function createGrid(gridSize){

    /* Sets the boxes in css to fit the grid.  */

    const totalGridSize = 409660
    const numOfCells = gridSize * gridSize
    const sizeOfCells = Math.sqrt(totalGridSize/numOfCells)
    
    /* Sets the CSS Variable to size of each cell */
    gridSizeVar.style.setProperty("--gridSize", `${sizeOfCells}px`);

    /* Removes the previous grid by removing grid's child */
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    /* Adds a div to the grid container based on the input value given */
    for(let i = 0; i<gridSize * gridSize; i++){
        const gridBox = document.createElement("div");
        // gridBox.textContent = i 
        gridBox.classList.add("Class" + i); 
        grid.appendChild(gridBox)
    }
}

/* Default 16 X 16 Grid */
createGrid(16)

button.addEventListener('click', function() {

    input.focus()

    listInput = input.value;
    input.value = "";

    createGrid(listInput)
    
});



/* Mouse Hover Function*/
/* MouseOver Div, grab Div Class and update its background color */
document.addEventListener('mouseover', function(event) {

    // Makes sure its the grid class, and that the children are picked (Not Parent)
    if (grid && event.target.parentElement === grid){
        randomNumRed = Math.floor(Math.random(0, 256) * 100)
        randomNumGreen = Math.floor(Math.random(0, 256) * 100)
        randomNumBlue = Math.floor(Math.random(0, 256) * 100)
        event.target.style.backgroundColor = `rgb(${randomNumRed}, ${randomNumGreen}, ${randomNumBlue})`;
    }
});
