class Block {

    constructor ( width ) {
    }

    canMoveDown ( gameBoard ) {

        let canMoveDown = true;

        if ( this.positionY + this.height >= gameBoard.height ) {
            canMoveDown = false;
        }

        this.shapes[0].forEach( c => {

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

    stopBlock ( gameBoard ) {
    
        this.shapes[0].forEach( c => {
    
            let [y, x] = c.split('_');
            gameBoard.state[parseInt(y) + this.positionY][parseInt(x) + this.positionX] = this.class;
    
        });
    
    }

}


export { Block };