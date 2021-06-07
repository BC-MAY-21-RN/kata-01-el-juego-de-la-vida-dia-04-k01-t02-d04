const { ALIVE, DEAD } = require('../states');


module.exports = class Cell {

    constructor(initialState) {
        this.state = initialState;
        this.neighborsAlive = 0;
        this.nextState = null;
    }

    calculateNextState() {
        switch (this.state) {
            case '.':
                if (this.neighborsAlive === 3) {
                    this.state = '*';
                } else {
                    this.state = '.';
                }
                break;
            case '*':
                if (this.neighborsAlive < 2 || this.neighborsAlive > 3) {
                    this.state = '.';
                } else if (this.neighborsAlive === 2 || this.neighborsAlive === 3) {
                    this.state = '*';
                }
                break;
            // default:
            //     this.nextState = this.state;
            //     break;
        }
    }
}