import { Block } from './Block.js';

class SBlock extends Block {

    name = 'S';
    shapes = [
        ['0_1', '0_2', '1_0', '1_1'],
        ['0_0', '1_0', '1_1', '2_1'],
    ];
    shapeIndex = 0;
    class = 's-block';
    height = 2;
    width = 3;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { SBlock }