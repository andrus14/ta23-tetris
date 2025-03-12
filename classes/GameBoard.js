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
                if ( currentBlock.shapes[0].includes(cellCoordinates) ) {
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

}

export { GameBoard }