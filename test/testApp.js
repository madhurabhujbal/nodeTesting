//const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const assert = require('chai').assert;

//creating a test
describe('App', function() {
    //testing the actual value
    it('sayHello should return hello', function() {
        let result = sayHello();
        assert.equal(result, 'hello');
    });

    it('sayHello should return a string', function() {
        let result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should return sum of 2 numbers greater than 5', function() {
        let result = addNumbers(4,8);
        assert.isAbove(result, 5);

    });
});