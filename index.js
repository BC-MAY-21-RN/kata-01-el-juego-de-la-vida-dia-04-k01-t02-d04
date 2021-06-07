/*
rules   independientes
cell    {
    current
    next
    everyNegibor
}
board   print



*/

const Board = require('./src/models/Board');

let board = new Board(4, 8, '.*......\n..*.....\n...*....\n....*...\n');
let result = '';
board.generateMatrixBoard();
board.fillMatrixWithCells();
result = board.print();
console.log(result);

setInterval(() => {
    board.countNeighbors();
    board.calculateNextCellStates();
    result = board.print();
    console.log(result);
    board.resetNeighbors();
}, 1000);


