class GameBoard {

    height = 24;
    width = 12;
    gameBoardTable;
    state;

    constructor () {
        this.gameBoardTable = document.getElementById('game-board');
        this.state = new Array(this.height).fill('').map(() => new Array(this.width).fill(''));
    }

    draw ( currentBlock) {

        this.gameBoardTable.innerHTML = '';
    
        for ( let y = 0; y < this.height; y++ ) {
    
            const tr = document.createElement('tr');
        
            for ( let x = 0; x < this.width; x++ ) {
        
                const td = document.createElement('td');
        
                td.dataset.y = y;
                td.dataset.x = x;
    
                // draw current block
                let cellCoordinates = (y - currentBlock.positionY) + '_' + (x - currentBlock.positionX);
                if ( currentBlock.shapes[currentBlock.shapeIndex].shape.includes(cellCoordinates) ) {
                    td.classList.add(currentBlock.class);
                }
    
                // draw fallen blocks
                if ( this.state[y][x] ) {
                    td.classList.add(this.state[y][x]);
                }
    
                tr.appendChild(td);
        
            }
        
            this.gameBoardTable.appendChild(tr);
        
        }
    
    }

    removeFullRows () {

        for ( let i = 0; i < this.state.length; i++ ) {

            if ( this.state[i].every( cell => cell) ) {
                this.state.splice(i, 1);
                this.state.unshift(new Array(this.width).fill(''));
            }

        }

    }

    drawNextBlock ( nextBlock ) {

        const nextBlockTable = document.getElementById('next-block');

        nextBlockTable.innerHTML = '';

        for ( let y = 0; y < nextBlock.shapes[0].height; y++) {

            const tr = document.createElement('tr');

            for ( let x = 0; x < nextBlock.shapes[0].width; x++) {
            
                const td = document.createElement('td');
                
                // draw next block
                let cellCoordinates = y + '_' + x;
                if ( nextBlock.shapes[0].shape.includes(cellCoordinates) ) {
                    td.classList.add(nextBlock.class);
                }

                tr.appendChild(td);

            }

            nextBlockTable.appendChild(tr);
        }

    }

}

export { GameBoard }