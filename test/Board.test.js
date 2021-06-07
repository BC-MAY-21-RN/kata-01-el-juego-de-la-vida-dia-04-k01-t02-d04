const Board = require('../src/models/Board');
const Cell = require('../src/models/Cell');

describe('Tests in Board class', () => {

  let board;
  let initialString = '........\n....*...\n...**...\n........\n';

  beforeAll(() => {
    board = new Board(4, 8, initialString);
  });

  test('should fill the matrix with the string input', () => {
    let expectedOutput = [
      ['.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.'],
    ];
    board.generateMatrixBoard();
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        expect(board.board[i][j]).toBe(expectedOutput[i][j]);
      }
    }
  });

  test('should fill the matrix with cell objects', () => {
    board.generateMatrixBoard();
    board.fillMatrixWithCells();
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        expect(board.board[i][j]).toBeInstanceOf(Cell);
      }
    }
  });

  test('should generate the matrix string with the cell current states', () => {
    board.generateMatrixBoard();
    board.fillMatrixWithCells();
    let result = board.print();
    expect(result).toBe(initialString);
  });

  test('should generate the matrix string with the next cell states', () => {
    let result = '';
    board.generateMatrixBoard();
    board.fillMatrixWithCells();
    board.countNeighbors();
    board.calculateNextCellStates();
    result = board.printNextGeneration();
    expect(result).toBe('........\n...**...\n...**...\n........\n');
  });

});
