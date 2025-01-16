import { Block } from './Block.js';

class LBlock extends Block {

    name = 'L';
    shapes = [
        ['0_2', '1_0', '1_1', '1_2'],
        ['0_0', '1_0', '2_0', '2_1'],
    ];
    shapeIndex = 0;
    class = 'l-block';
    height = 2;
    width = 3;

    constructor () {

    }

}

export { LBlock }