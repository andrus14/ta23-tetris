import { Block } from './Block.js';

class JBlock extends Block {

    name = 'J';
    shapes = [
        ['0_1', '1_1', '2_0', '2_1'],
        ['0_0', '0_1', '0_2', '1_2'],
        ['0_0', '0_1', '1_0', '2_0'],
        ['0_0', '1_0', '1_1', '1_2'],
    ];
    shapeIndex = 0;
    class = 'j-block';
    height = 3;
    width = 2;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { JBlock }