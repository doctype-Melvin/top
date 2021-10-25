/*
This code needs:
A function that changes the color after 
user choice has been made and does not reset the 
whole grid or changes colors of already hovered (colored)
cells
*/

const grid = document.querySelector('.grid');
let pixel;

function createGrid() {
    for (let i = 0; i < 256; i++) {
        pixel = document.createElement('div');
        //pixel.classList.add('pixel');
        pixel.setAttribute('id', 'pixel');
        grid.appendChild(pixel);
    }
}
createGrid();

const userInput = document.querySelectorAll('button');
userInput.forEach(button => button.addEventListener('click', function (e){
    let gridNew = document.getElementById('grid');
    if (e.target === document.getElementById('16')) {
        gridNew.style.gridTemplateColumns = "repeat(16, 1fr)";
        gridNew.style.gridTemplateRows = "repeat(16, 1fr)";
            changeGrid(256);
            return
    }else if (e.target === document.getElementById('32')) {
        gridNew.style.gridTemplateColumns = "repeat(32, 1fr)";
        gridNew.style.gridTemplateRows = "repeat(32, 1fr)";
            changeGrid(1024);
            return
    }else if (e.target === document.getElementById('64')) {
        gridNew.style.gridTemplateColumns = "repeat(64, 1fr)";
        gridNew.style.gridTemplateRows = "repeat(64, 1fr)";
            changeGrid(4096);
            return
    }
}));

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
};

function changeGrid(size) {
    removeGrid();
    for (let i = 0; i < size; i++) {
        pixel = document.createElement('div');
        //pixel.classList.add('pixel');
        pixel.setAttribute('id', 'pixel');
        grid.appendChild(pixel);
    }
};

//The color picker is selected and the 
//function(e) spits out a value as e.target.value
//which is the color by user choice
const picker = document.getElementById('picker');
picker.addEventListener('input', function(e) {
let picked = e.target.value;
console.log(picked)
})

//This function adds the black background
//to the pixel div. The color selection should
//change the div style if user selects another color. 
//Only on mouseover event should the color change. 
//Try integrating the eventlistener into the creatGrid functions.
grid.addEventListener('mouseover', function(e) {
    let tip = e.target;
    tip.classList.add('pixel');
})
//Here all pixel divs are selected
//If the user changes color the div background color should change on mouseover event
newPixel = grid.querySelectorAll('div')
