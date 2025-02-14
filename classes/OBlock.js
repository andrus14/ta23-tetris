import { Block } from './Block.js';

class OBlock extends Block {

    name = 'O';
    shapes = [
        ['0_0', '0_1', '1_0', '1_1'],
    ];
    shapeIndex = 0;
    class = 'o-block';
    height = 2;
    width = 3;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { OBlock }