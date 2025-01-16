class Block {

    types = [
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

    name;
    shape;
    class;
    height;
    width;
    positionY;
    positionX;

    constructor ( width ) {
        
        let type = this.types[Math.floor(Math.random() * this.types.length)];

        this.name = type.name;
        this.shape = type.shape;
        this.class = type.class;
        this.height = type.height;
        this.width = type.width;

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

    canMoveDown ( height, width, gameBoard ) {

        let canMoveDown = true;

        if ( this.positionY + this.height >= height ) {
            canMoveDown = false;
        }

        this.shape.forEach( c => {

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