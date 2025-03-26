import { Block } from './Block.js';

class IBlock extends Block {

    name = 'I';
    shapes = [
        {
            height: 4,
            width: 1,
            shape: ['0_0', '1_0', '2_0', '3_0'],
        },
        {
            height: 1,
            width: 4,
            shape: ['0_0', '0_1', '0_2', '0_3'],
        },
    ];
    shapeIndex = 0;
    class = 'i-block';

    positionY;
    positionX;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.shapes[this.shapeIndex].height;
        this.positionX = Math.floor((width - this.shapes[this.shapeIndex].width) / 2);

    }

}

export { IBlock }