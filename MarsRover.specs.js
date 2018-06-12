var MarsRover = require('./MarsRover');

    describe('Check MarsRover Moves correctly.', function () {
        it('should be able to give its original Position', function () {
            var marsRover = new MarsRover(1,2,'N');

            expect(marsRover.givePosition()).toEqual("1 2 N");
        });

        it('should be able to rotate direction to left side', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.instruction("L");

            expect(marsRover.givePosition()).toEqual("1 2 W");
        });

        it('should be able to rotate direction to left side', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.instruction("R");

            expect(marsRover.givePosition()).toEqual("1 2 E");
        });

    });