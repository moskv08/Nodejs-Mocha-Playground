const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();

const authController = require('../../controllers/authController');

describe('AuthController', function () {

    beforeEach('setting user roles', function () {
        console.log('Running before each test');
        // Arrange
        authController.setRoles(['user', 'tester']);
    });

    describe('isAuthorized', function () {
        it('should return false if not authorized', function () {
            const isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        });

        it('should return true if authorized', function () {
            const isAuth = authController.isAuthorized('tester');
            isAuth.should.be.true;
        });
    });

    describe('isAuthorizedAsync', function () {
        it.skip('should return false if not authorized', function (done) {
            // Act
            authController.isAuthorizedAsync('admin', function (isAuth) {
                // Assert
                assert.equal(false, isAuth);
                done();
            });

        });
    });
});
