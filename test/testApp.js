const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const assert = require('chai').assert;

sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(4,8);

//creating a test
describe('App', function() {
    //testing the actual value
    describe('sayHello()', function() {
        it('sayHello should return hello', function() {
            let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        });

        it('sayHello should return a string', function() {
            let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function() {
        it('addNumbers should return sum of 2 numbers greater than 5', function() {
            let result = app.addNumbers(4,8);
            assert.isAbove(addNumbersResult, 5);
        });

        it('addNumbers should return a number', function() {
            let result = app.addNumbers(4,8);
            assert.typeOf(addNumbersResult, 'number');
        });

    });
});