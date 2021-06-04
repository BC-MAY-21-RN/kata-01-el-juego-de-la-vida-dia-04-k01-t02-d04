const Cell = require('../src/models/Cell');
const { DEAD, ALIVE } = require('../src/states');

describe('Test in Cell class', () => {

  test('any dead cell with exactly three live neighbours becomes a live cell', () => {
    const cell = new Cell(DEAD);
    cell.neighbors = [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)];
    cell.calculateNextState();
    expect(cell.nextState).toBe(ALIVE);
  });

  test('any live cell must be dead if there are less than 2 alive cells around', () => {
    const cell = new Cell(ALIVE);
    cell.neighbors = [new Cell(ALIVE)];
    cell.calculateNextState();
    expect(cell.nextState).toBe(DEAD);
  });

  test('any live cell with more than three live neighbours dies, as if by overcrowding', () => {
    const cell = new Cell(ALIVE);
    cell.neighbors = [new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE), new Cell(ALIVE)];
    cell.calculateNextState();
    expect(cell.nextState).toBe(DEAD);
  });

  test('any live cell with two or three live neighbours lives on to the next generation', () => {
    const cell = new Cell(ALIVE);
    cell.neighbors = [new Cell(ALIVE), new Cell(ALIVE)];
    cell.calculateNextState();
    expect(cell.nextState).toBe(ALIVE);
  });

})


