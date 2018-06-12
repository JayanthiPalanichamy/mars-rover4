var MarsRover = function (xPosition,yPosition,direction) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.direction = direction;
};

MarsRover.prototype.givePosition = function () {
    return this.xPosition +" "+this.yPosition+" "+this.direction;
};
module.exports = MarsRover;
