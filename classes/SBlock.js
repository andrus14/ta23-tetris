import { Block } from './Block.js';

class SBlock extends Block {

    name = 'S';
    shapes = [
        {
            height: 2,
            width: 3,
            shape: ['0_1', '0_2', '1_0', '1_1'],
        },
        {
            height: 3,
            width: 2,
            shape: ['0_0', '1_0', '1_1', '2_1'],
        },
    ];
    shapeIndex = 0;
    class = 's-block';

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.shapes[this.shapeIndex].height;
        this.positionX = Math.floor((width - this.shapes[this.shapeIndex].width) / 2);

    }

}

export { SBlock }