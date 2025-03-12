import { GameBoard } from "./classes/GameBoard.js";
import { IBlock } from "./classes/IBlock.js";
import { JBlock } from "./classes/JBlock.js";
import { LBlock } from "./classes/LBlock.js";
import { OBlock } from "./classes/OBlock.js";
import { SBlock } from "./classes/SBlock.js";
import { TBlock } from "./classes/TBlock.js";
import { ZBlock } from "./classes/ZBlock.js";

const speed = 400;

const gameBoard = new GameBoard();

const blocks = [IBlock, JBlock, LBlock, OBlock, SBlock, TBlock, ZBlock];

let blockIndex = Math.floor(Math.random() * blocks.length);
let currentBlock = new blocks[blockIndex](gameBoard.width);

const intervalId = setInterval(runGame, speed);

function runGame () {
    gameBoard.draw(currentBlock);

    if ( currentBlock.canMoveDown( gameBoard ) ) {
        currentBlock.positionY++;
    } else {
        currentBlock.stopBlock(gameBoard);
        blockIndex = Math.floor(Math.random() * blocks.length);
        currentBlock = new blocks[blockIndex](gameBoard.width);
    }

}


