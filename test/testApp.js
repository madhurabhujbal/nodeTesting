//const app = require('../app');
const sayHello = require('../app').sayHello;
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
});