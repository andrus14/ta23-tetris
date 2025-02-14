import { Block } from './Block.js';

class IBlock extends Block {

    name = 'I';
    shapes = [
        ['0_0', '1_0', '2_0', '3_0'],
        ['0_0', '0_1', '0_2', '0_3'],
    ];
    shapeIndex = 0;
    class = 'i-block';
    height = 2;
    width = 3;

    positionY;
    positionX;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { IBlock }