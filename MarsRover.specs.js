var MarsRover = require('./MarsRover');

    describe('Check MarsRover Moves correctly.', function () {
        it('should be able to give its original Position', function () {
            var marsRover = new MarsRover(1,2,'N');

            expect(marsRover.givePosition()).toEqual("1 2 N");
        });

    });