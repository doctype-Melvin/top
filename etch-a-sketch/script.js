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
    paintColor();
};

function paintColor(){
    let squares = document.querySelectorAll('#pixel');
    let picker = document.getElementById('picker');
    picker.addEventListener('input', function(e) {
        squares.forEach(div => {
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'backgroundColor');
                div.style.backgroundColor = e.target.value;
            })
        })
    })
    grid.addEventListener('click', () => {
    squares.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background: black');
        })
    })
})
}
paintColor()