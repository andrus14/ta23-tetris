import { Block } from './Block.js';

class OBlock extends Block {

    name = 'O';
    shapes = [
        {
            height: 2,
            width: 2,
            shape: ['0_0', '0_1', '1_0', '1_1'],
        },
    ];
    shapeIndex = 0;
    class = 'o-block';

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.shapes[this.shapeIndex].height;
        this.positionX = Math.floor((width - this.shapes[this.shapeIndex].width) / 2);

    }

}

export { OBlock }