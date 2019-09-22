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
        it('should render index once', function () {

            const req = {};
            const res = {
                render: sinon.spy()
            };

            bookController.getIndex(req, res);

            res.render.firstCall.args[0].should.equal('index');
            res.render.calledOnce.should.be.true;
        });
    });
});
