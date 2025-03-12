class Block {

    constructor ( width ) {
    }

    canMoveDown ( height, width, gameBoard ) {

        let canMoveDown = true;

        if ( this.positionY + this.height >= height ) {
            canMoveDown = false;
        }

        this.shapes[0].forEach( c => {

            let [y, x] = c.split('_');
            const shapeY = parseInt(y) + this.positionY + 1;
            const shapeX = parseInt(x) + this.positionX;

            if ( shapeY >= 0 && shapeY < height && shapeX >= 0 && shapeX < width ) {

                if ( gameBoard[shapeY][shapeX] ) {
                    // console.log(shapeY, shapeX);
                    canMoveDown = false;
                }

            }

        });

        return canMoveDown;

    }

}

export { Block };