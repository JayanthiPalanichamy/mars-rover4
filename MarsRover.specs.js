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

        it('should be able to move towards north', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.instruction("M");

            expect(marsRover.givePosition()).toEqual("1 3 N");
        });

        it('should be able to move marsRover according to instruction', function () {
            var marsRover = new MarsRover(1,2,'N');
            marsRover.instruction("LMLMLMLMM");

            expect(marsRover.givePosition()).toEqual("1 3 N");
        });

        it('should be able to move marsRover according to given instruction', function () {
            var marsRover = new MarsRover(3,3,'E');
            marsRover.instruction("MMRMMRMRRM");

            expect(marsRover.givePosition()).toEqual("5 1 E");
        });


    });