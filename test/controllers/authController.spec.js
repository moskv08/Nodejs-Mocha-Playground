const assert = require('assert');
const authController = require('../../controllers/authController');

describe('AuthController', function () {

    beforeEach('setting user roles', function () {
        console.log('Running before each test');
        // Arrange
        authController.setRoles(['user', 'tester']);
    });

    describe('isAuthorized', function () {
        it('should return false if not authorized', function () {
            // Act
            const expected = authController.isAuthorized('admin');
            // Assert
            assert.equal(false, expected);
        });

        it('should return true if authorized', function () {
            // Act
            const expected = authController.isAuthorized('tester');
            // Assert
            assert.equal(true, expected);
        });
    });

    describe('isAuthorizedAsync', function () {
        it('should return false if not authorized', function (done) {
            // Act
            authController.isAuthorizedAsync('admin', function (isAuth) {
                // Assert
                assert.equal(false, isAuth);
                done();
            });

        });
    });
});
