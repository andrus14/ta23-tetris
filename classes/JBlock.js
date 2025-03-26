import { Block } from './Block.js';

class JBlock extends Block {

    name = 'J';
    shapes = [
        {
            height: 3,
            width: 2,
            shape: ['0_1', '1_1', '2_0', '2_1'],
        },
        {
            height: 2,
            width: 3,
            shape: ['0_0', '0_1', '0_2', '1_2'],
        },
        {
            height: 3,
            width: 2,
            shape: ['0_0', '0_1', '1_0', '2_0'],
        },
        {
            height: 2,
            width: 3,
            shape: ['0_0', '1_0', '1_1', '1_2'],
        },
    ];
    shapeIndex = 0;
    class = 'j-block';

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.shapes[this.shapeIndex].height;
        this.positionX = Math.floor((width - this.shapes[this.shapeIndex].width) / 2);

    }

}

export { JBlock }