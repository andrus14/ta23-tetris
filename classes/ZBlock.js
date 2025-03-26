import { Block } from './Block.js';

class ZBlock extends Block {

    name = 'Z';
    shapes = [
        {
            height: 2,
            width: 3,
            shape: ['0_0', '0_1', '1_1', '1_2'],
        },
        {
            height: 3,
            width: 2,
            shape: ['0_1', '1_0', '1_1', '2_0'],
        },
    ];
    shapeIndex = 0;
    class = 'z-block';

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.shapes[this.shapeIndex].height;
        this.positionX = Math.floor((width - this.shapes[this.shapeIndex].width) / 2);

    }

}

export { ZBlock }