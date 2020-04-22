const app = require('../app');
const assert = require('chai').assert;

//creating a test
describe('App', function() {
    //testing the actual value
    it('App should return hello', function() {
        assert.equal(app(), 'hello');
    });
});