var MarsRover = function (xPosition, yPosition, direction) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.direction = direction;
    this.increaseX = function () {
        this.xPosition++;
    }
    this.increaseY = function () {
        this.yPosition++;
    }
    this.decreaseX = function () {
        this.xPosition--;
    }
    this.decreaseY = function () {
        this.yPosition--;
    }
    this.rotateDirectionLeft = function () {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
        }
    }

    this.rotateDirectionRight = function () {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'W':
                this.direction = 'N';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
        }
    }

    this.move = function () {
        switch (this.direction) {
            case 'N':
                this.increaseY();
                break;
            case 'W':
                this.decreaseX();
                break;
            case 'S':
                this.decreaseY();
                break;
            case 'E':
                this.increaseX();
                break;
        }

    }

};

MarsRover.prototype.givePosition = function () {
    return this.xPosition + " " + this.yPosition + " " + this.direction;
};

MarsRover.prototype.instruction = function (message) {
    for (let command of message) {
        switch (command) {
            case 'L':
                this.rotateDirectionLeft();
                break;
            case 'R':
                this.rotateDirectionRight();
                break;
            case 'M':
                this.move();
                break;
        }
    }

};
module.exports = MarsRover;
