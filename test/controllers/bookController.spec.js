const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');

const bookController = require('../../controllers/bookController');

// Bring in chai-as-promised as middleware
before(() => {
    chai.use(chaiAsPromised);
    chai.should();
});

describe('BookController', function () {
    describe('getIndex', function () {

        let user = {};
        beforeEach(function () {
            user = {
                roles: ['user'],
                isAuthorized: function (neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
        });

        it('should render profile once if user is authorized', function () {
            // Stub isAuhtorized function
            const isAuth = sinon.stub(user, 'isAuthorized').returns(true);
            const req = { user };
            const res = { render: sinon.spy() };

            bookController.getIndex(req, res);

            isAuth.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('profile');
            res.render.calledOnce.should.be.true;
        });

        it('should render index once if user was not authorized', function () {
            // Stub isAuhtorized function
            const isAuth = sinon.stub(user, 'isAuthorized').returns(false);
            const req = { user };
            const res = { render: sinon.spy() };

            bookController.getIndex(req, res);

            isAuth.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
            res.render.calledOnce.should.be.true;
        });

        it('should throw an error if authorization was not possible', function () {
            // Stub isAuhtorized function
            const isAuth = sinon.stub(user, 'isAuthorized').throws();
            const req = { user };
            const res = { render: sinon.spy() };

            bookController.getIndex(req, res);

            isAuth.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('error');
            res.render.calledOnce.should.be.true;
        });
    });
});
