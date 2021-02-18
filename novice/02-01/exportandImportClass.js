const { Rectangle, Cube } = require('../01-04/oop');

const rectangle = new Rectangle(4, 4);
const cube = new Cube(5, 5, 5);

console.log(rectangle.luas);
console.log(cube.volume());