import { GameBoard } from "./classes/GameBoard.js";
import { IBlock } from "./classes/IBlock.js";
import { JBlock } from "./classes/JBlock.js";
import { LBlock } from "./classes/LBlock.js";
import { OBlock } from "./classes/OBlock.js";
import { SBlock } from "./classes/SBlock.js";
import { TBlock } from "./classes/TBlock.js";
import { ZBlock } from "./classes/ZBlock.js";

let removedRowsTotal = 0;
let level = 0;
let score = 0;
const speed = 400;

const gameBoard = new GameBoard();

// const blocks = [IBlock];
const blocks = [IBlock, JBlock, LBlock, OBlock, SBlock, TBlock, ZBlock];

let blockIndex = Math.floor(Math.random() * blocks.length);
let currentBlock = new blocks[blockIndex](gameBoard.width);

blockIndex = Math.floor(Math.random() * blocks.length);
let nextBlock = new blocks[blockIndex](gameBoard.width);
gameBoard.drawNextBlock(nextBlock);

document.addEventListener('keydown', e => {

    switch ( e.code ) {

        case 'ArrowLeft':
            if ( gameBoard && currentBlock.canMoveLeft(gameBoard) ) {
                currentBlock.moveLeft();
                gameBoard.draw(currentBlock);
            }
            break;

        case 'ArrowRight':
            if ( currentBlock.canMoveRight(gameBoard) ) {
                currentBlock.moveRight();
                gameBoard.draw(currentBlock);
            }
            break;

        case 'ArrowUp':
            currentBlock.rotate();
            gameBoard.draw(currentBlock);
            // if ( currentBlock.canMoveRight(gameBoard) ) {
            //     currentBlock.moveRight();
            //     gameBoard.draw(currentBlock);
            // }
            break;
    
        case 'ArrowDown':
            if ( currentBlock.canMoveDown(gameBoard) ) {
                currentBlock.moveDown();
                gameBoard.draw(currentBlock);
            }
            break;
    
        case 'Space':
            while ( currentBlock.canMoveDown(gameBoard) ) {
                currentBlock.moveDown();
            }
            gameBoard.draw(currentBlock);
            break;
    
        default:
            break;
    }

    // console.log(e.code);
});

const intervalId = setInterval(runGame, speed);

function runGame () {
    gameBoard.draw(currentBlock);

    if ( currentBlock.canMoveDown(gameBoard) ) {

        currentBlock.moveDown();

    } else {
        
        currentBlock.stopBlock(gameBoard);
        
        if ( currentBlock.isGameOver() ) {
            
            gameBoard.draw(currentBlock);
            clearInterval(intervalId);
            gameBoard.displayGameOver();
            return;

        }
        
        const removedRowCount = gameBoard.removeFullRows();
        
        if ( removedRowCount ) {

            score = gameBoard.updateScore(score, removedRowCount, level);
            
            removedRowsTotal += removedRowCount
            level = gameBoard.updateLevel(removedRowsTotal);
            
        }

        currentBlock = nextBlock;
        
        blockIndex = Math.floor(Math.random() * blocks.length);
        nextBlock = new blocks[blockIndex](gameBoard.width);
        gameBoard.drawNextBlock(nextBlock);

    }

}
