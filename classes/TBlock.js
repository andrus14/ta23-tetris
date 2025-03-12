import { Block } from './Block.js';

class TBlock extends Block {

    name = 'T';
    shapes = [
        ['0_0', '0_1', '0_2', '1_1'],
        ['0_0', '1_0', '1_1', '2_0'],        
        ['0_1', '1_0', '1_1', '2_1'],
        ['0_1', '1_0', '1_1', '1_2'],
    ];
    shapeIndex = 0;
    class = 't-block';
    height = 2;
    width = 3;

    constructor ( width ) {

        super(width)

        this.positionY = 0 - this.height;
        this.positionX = Math.floor((width - this.width) / 2);

    }

}

export { TBlock }