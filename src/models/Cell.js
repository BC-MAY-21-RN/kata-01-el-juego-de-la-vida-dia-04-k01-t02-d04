const { ALIVE, DEAD } = require('../states');


module.exports = class Cell {

    constructor(initialState) {
        this.state = initialState;
        this.neighbors = [];
        this.nextState = null;
    }

    calculateNextState() {
        let neighborsAlive = 0;
        this.neighbors.forEach(el => {
            if (el.state === ALIVE) {
                neighborsAlive++;
            }
        });

        if (this.state === DEAD && neighborsAlive === 3) {
            this.nextState = ALIVE;
        } else if (this.state === ALIVE && (neighborsAlive < 2 || neighborsAlive > 3)) {
            this.nextState = DEAD;
        } else {
            this.nextState = this.state;
        }
    }
}