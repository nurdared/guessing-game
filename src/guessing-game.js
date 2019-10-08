class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.m = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        this.m = Math.round((this.left + this.right) / 2);
        return this.m;
    }

    lower() {
        this.right = this.m;    //to look left side
    }
    
    greater() {
        this.left = this.m;     //to look right side
    }
}

module.exports = GuessingGame;
