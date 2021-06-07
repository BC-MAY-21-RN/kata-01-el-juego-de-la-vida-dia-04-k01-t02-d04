const { ALIVE, DEAD } = require('../states');
const Cell = require('./Cell');

module.exports = class Board {
    constructor(rows, columns, inputString, iterations) {
        this.rows = rows;
        this.columns = columns;
        this.inputString = inputString;
        this.board = null;
        this.iterations = iterations;
    }

    generateMatrixBoard() {
        this.board = this.inputString.split('\n');
        this.board = this.board.map(row => row.split(''));
    }

    fillMatrixWithCells() {
        this.board = this.board.map(row => {
            return row.map(col => {
                return col === '.' ? new Cell('.') : new Cell('*')
            });
        });
    }

    countNeighbors() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                if (i - 1 >= 0)
                    if (this.board[i - 1][j].state == '*') this.board[i][j].neighborsAlive++;
                if (i - 1 >= 0 && j - 1 >= 0)
                    if (this.board[i - 1][j - 1].state == '*') this.board[i][j].neighborsAlive++;
                if (i - 1 >= 0 && j + 1 < this.columns)
                    if (this.board[i - 1][j + 1].state == '*') this.board[i][j].neighborsAlive++;
                if (j - 1 >= 0)
                    if (this.board[i][j - 1].state == '*') this.board[i][j].neighborsAlive++;
                if (j + 1 < this.columns)
                    if (this.board[i][j + 1].state == '*') this.board[i][j].neighborsAlive++;
                if (i + 1 < this.rows)
                    if (this.board[i + 1][j].state == '*') this.board[i][j].neighborsAlive++;
                if (i + 1 < this.rows && j - 1 >= 0)
                    if (this.board[i + 1][j - 1].state == '*') this.board[i][j].neighborsAlive++;
                if (i + 1 < this.rows && j + 1 < this.columns)
                    if (this.board[i + 1][j + 1].state == '*') this.board[i][j].neighborsAlive++;
            }
        }
    }

    resetNeighbors() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j].neighborsAlive = 0;
            }
        }
    }

    calculateNextCellStates() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.columns; j++) {
                this.board[i][j].calculateNextState();
            }
        }
    }

    print() {
        let result = '';
        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                result += this.board[i][j].state;
            }
            if (i !== this.board.length - 1) {
                result += '\n';
            }
        }
        return result;
    }

}