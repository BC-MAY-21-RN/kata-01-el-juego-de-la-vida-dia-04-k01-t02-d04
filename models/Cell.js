const { LIVE, DEAD } = require('./states');


module.export = class Cell {

    constructor(initialState = DEAD) {
        this.currentState = initialState;
        this.neighbors = [];
        this.nextState = null;
    }

    setNewState() {
        let lives = 0;
        this.neighbors.forEach(el => {
            if (el.currentState === LIVE) {
                lives++;
            }
        });

        if (this.currentState === DEAD && lives === 3) {
            this.nextState = LIVE;
        } else if (this.currentState === LIVE && (lives < 2 || lives > 3)) {
            this.nextState = DEAD;
        } else {
            this.nextState = this.currentState;
        }
    }
}