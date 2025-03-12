import { IBlock } from "./classes/IBlock.js";
import { JBlock } from "./classes/JBlock.js";
import { LBlock } from "./classes/LBlock.js";
import { OBlock } from "./classes/OBlock.js";
import { SBlock } from "./classes/SBlock.js";
import { TBlock } from "./classes/TBlock.js";
import { ZBlock } from "./classes/ZBlock.js";

const gameBoardTable = document.getElementById('game-board');

const height = 24;
const width = 12;
const speed = 400;

const gameBoard = new Array(24).fill('').map(() => new Array(12).fill(''));

const blocks = [IBlock, JBlock, LBlock, OBlock, SBlock, TBlock, ZBlock];

let blockIndex = Math.floor(Math.random() * blocks.length);
let currentBlock = new blocks[blockIndex](width);

const intervalId = setInterval(runGame, speed);

function runGame () {
    drawGameBoard();

    if ( currentBlock.canMoveDown( height, width, gameBoard ) ) {
        currentBlock.positionY++;
    } else {
        stopBlock();
        blockIndex = Math.floor(Math.random() * blocks.length);
        currentBlock = new blocks[blockIndex](width);
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
            if ( currentBlock.shapes[0].includes(cellCoordinates) ) {
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

    currentBlock.shapes[0].forEach( c => {

        let [y, x] = c.split('_');
        gameBoard[parseInt(y) + currentBlock.positionY][parseInt(x) + currentBlock.positionX] = currentBlock.class;

    });

}