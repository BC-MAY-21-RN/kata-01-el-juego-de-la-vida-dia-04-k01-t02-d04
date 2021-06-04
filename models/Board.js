const { LIVE, DEAD } = require('./states');
const Cell = require('./Cell');

module.export = class Board {
    constructor(rows, colums, model) {
        this.rows = rows;
        this.colums = colums;
        this.model = model;
        this.board = null;
    }

    generateBoard() {
        this.board = this.model.split('\n');
        this.board = this.board.map(row => row.split(''));
        this.board = board.map(row => {
            return row.map(col => {
                return col === DEAD ? new Cell(DEAD) : new Cell(LIVE)
            })
        })

        for (let i = 0; i < this.board.length; i++) {
            for (let j = 0; j < this.board[i].length; j++) {
                const HAY_SUPERIOR = i - 1 >= 0;
                const HAY_INFERIOR = i + 1 < this.rows;
                const HAY_IZQUIERDA = j - 1 >= 0;
                const HAY_DERECHA = j + 1 < this.columns;
                const SUPERIOR = i - 1;
                const INFERIOR = i + 1;
                const IZQUIERDA = j - 1;
                const DERECHA = j + 1;
                if (HAY_SUPERIOR) {
                    this.board[i][j].neighbors.push(this.board[SUPERIOR][j]);
                    if (HAY_IZQUIERDA) {
                        this.board[i][j].neighbors.push(this.board[SUPERIOR][IZQUIERDA]);
                    }
                    if (HAY_DERECHA) {
                        this.board[i][j].neighbors.push(this.board[SUPERIOR][DERECHA]);
                    }
                }
                if (HAY_INFERIOR) {
                    this.board[i][j].neighbors.push(this.board[INFERIOR][j]);
                    if (HAY_IZQUIERDA) {
                        this.board[i][j].neighbors.push(this.board[INFERIOR][IZQUIERDA]);
                    }
                    if (HAY_DERECHA) {
                        this.board[i][j].neighbors.push(this.board[INFERIOR][DERECHA]);
                    }
                }
                if (HAY_IZQUIERDA) {
                    this.board[i][j].neighbors.push(this.board[i][IZQUIERDA]);
                }
                if (HAY_DERECHA) {
                    this.board[i][j].neighbors.push(this.board[i][DERECHA]);
                }
            }
        }

    }

}