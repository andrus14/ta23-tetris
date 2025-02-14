import { Block } from './Block.js';

class LBlock extends Block {

    name = 'L';
    shapes = [
        ['0_2', '1_0', '1_1', '1_2'],
        ['0_0', '1_0', '2_0', '2_1'],
        ['1_0', '0_0', '0_1', '0_2'],
        ['0_0', '0_1', '1_1', '2_1'],
    ];
    shapeIndex = 0;
    class = 'l-block';
    height = 2;
    width = 3;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { LBlock }