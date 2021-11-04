const grid = document.querySelector('.grid');
let pixel;

function createGrid() {
    for (let i = 0; i < 256; i++) {
        pixel = document.createElement('div');
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
        pixel.setAttribute('id', 'pixel');
        grid.appendChild(pixel);
    }
    paintColor();
    paintRainbow();
};

function paintColor(){
    let squares = document.querySelectorAll('#pixel');
    let picker = document.getElementById('picker');
    picker.addEventListener('input', function(e) {
        squares.forEach(div => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = e.target.value;
            })  
        })
    })
    squares.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background: black');
        }) 
    })

}
paintColor();

function createRainbow(){
    let colorArray = [];
        colorArray.push(Math.floor(Math.random()*255));
        colorArray.push(Math.floor(Math.random()*255));
        colorArray.push(Math.floor(Math.random()*255));
    let rgb = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`
    return rgb;
}
createRainbow();


        let menu = document.querySelector('.menu');
            let picker = document.querySelector('#picker')
                let button = document.createElement('button');
function paintRainbow(){
    let squares = document.querySelectorAll('#pixel');
        button.textContent = 'Rainbow Mode';
        menu.insertBefore(button, picker);
            button.addEventListener('click', () => {
                squares.forEach(div => {
                    div.addEventListener('mouseover', () => { 
                        div.style.backgroundColor = createRainbow()
                })
            })
})
}
paintRainbow();

// function increaseOpacity(){
//     let opacityArray = [0, 0, 0, 0];
//     //let i = 0;
//     for (; opacityArray[3] < 1; opacityArray[3] += 0.1) {
//         console.log(opacityArray[3])
//     }
//     return `rgba(${opacityArray[0]}, ${opacityArray[1]}, ${opacityArray[2]}, ${opacityArray[3]})`
// };
// console.log(increaseOpacity());

    let greyScale = document.createElement('button');
function paintOpacity(){
    let squares = document.querySelectorAll('#pixel');
        greyScale.textContent = 'Grey Scale';
        menu.insertBefore(greyScale, picker);
            greyScale.addEventListener('click', () => {
                squares.forEach(div => {
                    div.addEventListener('mouseover', () => {
                        div.style.opacity = 0.05;
                    })
                })
            })
}
paintOpacity();