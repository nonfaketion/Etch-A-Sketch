

function populategrid(size){
    const grid = document.querySelector('#container');
    for(let i =0; i<size; i++){
        //var rowcell = document.createElement()
        for( let j =0; j<size;j++){
            var cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.cssText = `width: ${600/size}px; height: ${600/size}px;`;
            grid.appendChild(cell);
        }
    }
}

const gengrid = document.querySelector('#generate');
gengrid.addEventListener('click',populategrid(50));