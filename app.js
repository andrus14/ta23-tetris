const gameBoardTable = document.getElementById('game-board');

const height = 24;
const width = 12;
const speed = 400;

const gameBoard = new Array(24).fill('').map(() => new Array(12).fill(''));

const blocks = [
    {
        'name': 'I',
        'shape': ['0_0', '1_0', '2_0', '3_0'],
        'class': 'i-block',
        'height': 4,
        'width': 1
    },
    {
        'name': 'O',
        'shape': ['0_0', '0_1', '1_0', '1_1'],
        'class': 'o-block',
        'height': 2,
        'width': 2
    },
    {
        'name': 'T',
        'shape': ['0_0', '0_1', '0_2', '1_1'],
        'class': 't-block',
        'height': 2,
        'width': 3
    },
    {
        'name': 'S',
        'shape': ['0_1', '0_2', '1_0', '1_1'],
        'class': 's-block',
        'height': 2,
        'width': 3
    },
    {
        'name': 'Z',
        'shape': ['0_0', '0_1', '1_1', '1_2'],
        'class': 'z-block',
        'height': 2,
        'width': 3
    },
    {
        'name': 'J',
        'shape': ['0_0', '1_0', '1_1', '1_2'],
        'class': 'j-block',
        'height': 2,
        'width': 3
    },
    {
        'name': 'L',
        'shape': ['0_2', '1_0', '1_1', '1_2'],
        'class': 'l-block',
        'height': 2,
        'width': 3
    }
];

let currentBlock, currentBlockY, currentBlockX;

initBlocks();

const intervalId = setInterval(runGame, speed);

function runGame () {
    // console.log('runGame');
    drawGameBoard();

    if ( canMoveDown() ) {
        currentBlockY++;
    } else {
        stopBlock();
        initBlocks();
    }

}

function initBlocks () {

    currentBlock = blocks[Math.floor(Math.random() * blocks.length)];
    currentBlockY = 0 - currentBlock.height;
    currentBlockX = Math.floor((width - currentBlock.width) / 2);

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
            let cellCoordinates = (y - currentBlockY) + '_' + (x - currentBlockX);
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

function canMoveDown () {

    let canMoveDown = true;

    if ( currentBlockY + currentBlock.height >= height ) {
        canMoveDown = false;
    }

    currentBlock.shape.forEach( c => {

        let [y, x] = c.split('_');
        const shapeY = parseInt(y) + currentBlockY + 1;
        const shapeX = parseInt(x) + currentBlockX;

        if ( shapeY >= 0 && shapeY < height && shapeX >= 0 && shapeX < width ) {

            if ( gameBoard[shapeY][shapeX] ) {
                // console.log(shapeY, shapeX);
                canMoveDown = false;
            }

        }

    });

    return canMoveDown;

}

function stopBlock () {

    currentBlock.shape.forEach( c => {

        let [y, x] = c.split('_');
        gameBoard[parseInt(y) + currentBlockY][parseInt(x) + currentBlockX] = currentBlock.class;

    });

}