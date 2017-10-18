var should = require('should');
var _ = require('lodash');
require('../src/exists.js')

describe('Exists', function () {
	it('Should return true if value exists because is true', function (done) {
		var value = true;
		_.exists(value).should.be.true();
		done();
	});
	
	it('Should return true if value exists because is false', function (done) {
		var value = false;
		_.exists(value).should.be.true();
		done();
	});
	
	it('Should return true if value exists because value has a string', function (done) {
		var value = 'string';
		_.exists(value).should.be.true();
		done();
	});
	
	it('Should return true if value exists because value has a number', function (done) {
		var value = 5;
		_.exists(value).should.be.true();
		done();
	});
	
	it('Should return false if value is an empty string', function (done) {
		var value = '';
		_.exists(value).should.be.false();
		done();
	});
	
	it('Should return false if value is null', function (done) {
		var value = null;
		_.exists(value).should.be.false();
		done();
	})
	
	it('Should return false if value is undefiend', function (done) {
		var value = undefined;
		_.exists(value).should.be.false();
		done();
	});
	
	it('Should return false if value is Nan', function (done) {
		var value = NaN;
		_.exists(value).should.be.false();
		done();
	});
	
	it('Should return false if value is an empty object', function (done) {
		var value = {};
		_.exists(value).should.be.false();
		done();
	});
	
	it('Should return false if array is empty', function (done) {
		var value = [];
		_.exists(value).should.be.false();
		done();
	})

	it('Should return true if value is 0', function (done) {
		var value = 0
		_.exists(value).should.be.true();
		done()
	})
});