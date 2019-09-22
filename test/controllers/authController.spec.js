const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const authController = require('../../controllers/authController');

// Bring in chai-as-promised as middleware
before(() => {
    chai.use(chaiAsPromised);
    chai.should();
});

describe('AuthController', function () {

    beforeEach('setting user roles', function () {
        console.log('setup roles before each');
    });

    describe('isAuthorized', function () {

        let user = {};
        beforeEach(function () {
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
            authController.setUser(user);
        });

        it('should return false if not authorized', function () {
            const isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        });

        it('should return true if authorized', function () {
            authController.setRoles(['user', 'tester']);
            const isAuth = authController.isAuthorized('tester');
            isAuth.should.be.true;
        });
    });

    describe('isAuthorizedAsync', function () {
        it('should return false if not authorized', function (done) {
            // Act
            authController.isAuthorizedCallback('admin', function (isAuth) {
                // Assert
                assert.equal(false, isAuth);
                done();
            });

        });
    });

    describe('isAuthorizedPromise', function () {
        it('should return false if not authorized', function () {
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });

    });
});
