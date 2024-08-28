class GuessingGame {
    constructor() {
        this.left = 0
        this.right = 0
        this.current = 0
    }

    setRange(min, max) {
        this.left = min
        this.right = max
    }

    guess() {
        this.current = Math.round((this.left + this.right) / 2)
        return this.current
    }

    lower() {
        this.right = this.current
    }

    greater() {
        this.left = this.current
    }
}

module.exports = GuessingGame;