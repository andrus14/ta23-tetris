class Block {

    constructor ( width ) {
    }

    canMoveLeft ( gameBoard ) {

        let res = true;

        if ( this.positionX == 0 ) {
            res = false;
        }

        this.shapes[this.shapeIndex].shape.forEach( c => {
            let [y, x] = c.split('_');
            y = +y + this.positionY;
            x = +x + this.positionX - 1;

            if (y >= 0 && y < gameBoard.height && x >= 0 && x < gameBoard.width) {
                if (gameBoard.state[y][x]) {
                    res = false;
                }
            }
 
        });
        
        return res;

    }

    moveLeft () {
        this.positionX--;
    } 

    canMoveRight ( gameBoard ) {

        let res = true;

        if ( this.positionX + this.shapes[this.shapeIndex].width == gameBoard.width ) {
            res = false;
        }

        this.shapes[this.shapeIndex].shape.forEach( c => {
            let [y, x] = c.split('_');
            y = +y + this.positionY;
            x = +x + this.positionX + 1;

            if (y >= 0 && y < gameBoard.height && x >= 0 && x < gameBoard.width) {
                if (gameBoard.state[y][x]) {
                    res = false;
                }
            }

        });

        return res;

    }

    moveRight () {
        this.positionX++;
    } 

    canMoveDown ( gameBoard ) {

        let canMoveDown = true;

        if ( this.positionY + this.shapes[this.shapeIndex].height >= gameBoard.height ) {
            canMoveDown = false;
        }

        this.shapes[this.shapeIndex].shape.forEach( c => {

            let [y, x] = c.split('_');
            const shapeY = parseInt(y) + this.positionY + 1;
            const shapeX = parseInt(x) + this.positionX;

            if ( shapeY >= 0 && shapeY < gameBoard.height && shapeX >= 0 && shapeX < gameBoard.width ) {

                if ( gameBoard.state[shapeY][shapeX] ) {
                    canMoveDown = false;
                }

            }

        });

        return canMoveDown;

    }
    
    moveDown () {
        this.positionY++;
    } 

    stopBlock ( gameBoard ) {
    
        this.shapes[this.shapeIndex].shape.forEach( c => {
    
            let [y, x] = c.split('_');

            if ( parseInt(y) + this.positionY >= 0 ) {
                gameBoard.state[parseInt(y) + this.positionY][parseInt(x) + this.positionX] = this.class;
            }
    
        });
    
    }

    rotate () {
        this.shapeIndex = (this.shapeIndex + 1) % this.shapes.length
    }

    isGameOver () {
        
        let res = false;

        this.shapes[this.shapeIndex].shape.forEach( c => {

            let [y, x] = c.split('_');
            y = +y + this.positionY;
            x = +x + this.positionX;

            if ( y <= 0 ) {
                res = true;
            }

        });

        return res;
    }

}


export { Block };