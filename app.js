import { Block } from "./classes/Block.js";

const gameBoardTable = document.getElementById('game-board');

const height = 24;
const width = 12;
const speed = 400;

const gameBoard = new Array(24).fill('').map(() => new Array(12).fill(''));

let currentBlock = new Block(width);

console.log(currentBlock.name);

const intervalId = setInterval(runGame, speed);

function runGame () {
    drawGameBoard();

    if ( currentBlock.canMoveDown( height, width, gameBoard ) ) {
        currentBlock.positionY++;
    } else {
        stopBlock();
        currentBlock = new Block(width);
    }

}

function drawGameBoard () {

    gameBoardTable.innerHTML = '';

    for ( let y = 0; y < height; y++ ) {

        const tr = document.createElement('tr');
    
        for ( let x = 0; x < width; x++ ) {
    
            const td = document.createElement('td');
    
            td.dataset.y = y;
            td.dataset.x = x;

            // draw current block
            let cellCoordinates = (y - currentBlock.positionY) + '_' + (x - currentBlock.positionX);
            if ( currentBlock.shape.includes(cellCoordinates) ) {
                td.classList.add(currentBlock.class);
            }

            // draw fallen blocks
            if ( gameBoard[y][x] ) {
                td.classList.add(gameBoard[y][x]);
            }

            tr.appendChild(td);
    
        }
    
        gameBoardTable.appendChild(tr);
    
    }

}

function stopBlock () {

    currentBlock.shape.forEach( c => {

        let [y, x] = c.split('_');
        gameBoard[parseInt(y) + currentBlock.positionY][parseInt(x) + currentBlock.positionX] = currentBlock.class;

    });

}