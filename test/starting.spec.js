const assert = require('assert');
const { expect } = require('chai');
const should = require('chai').should();

describe('Basic Mocha test', function () {
    it('should deal with objects', () => {
        const objA = { name: 'Jon', gender: 'male' };
        const objB = { name: 'Jon', gender: 'male' };

        objA.should.deep.equal(objB);
    });

    it('should allow testing nulls', function () {
        const iAmNull = null;
        should.not.exist(iAmNull);
    });
});