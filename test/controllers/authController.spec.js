const assert = require('assert');
const authController = require('../../controllers/authController');

describe('AuthController', function () {
    describe('isAuthorized', function () {
        it('should return false if not authorized', function () {
            const role = 'admin'
            const roles = ['user'];
            const expected = authController.isAuthorized(roles, role);
            assert.equal(false, expected);
        });

        it('should return true if authorized', function () {
            const role = 'admin'
            const roles = ['user', 'admin'];
            const expected = authController.isAuthorized(roles, role);
            assert.equal(true, expected);
        });
    });

    describe('isAuthorizedAsync', function () {
        it('should return false if not authorized', function (done) {
            const role = 'admin'
            const roles = ['user'];
            authController.isAuthorizedAsync(roles, role, function (isAuth) {
                assert.equal(false, isAuth);
                done();
            });

        });
    });
});
