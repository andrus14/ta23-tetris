import { Block } from './Block.js';

class ZBlock extends Block {

    name = 'Z';
    shapes = [
        ['0_0', '0_1', '1_1', '1_2'],
        ['0_1', '1_0', '1_1', '2_0'],
    ];
    shapeIndex = 0;
    class = 'z-block';
    height = 2;
    width = 3;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { ZBlock }