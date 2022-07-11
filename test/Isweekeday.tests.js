import assert from"assert";
import Isweekday from "../Isweekday.js";


describe('test isweekday function',function(){
    it('should return true if tuesday is day the of week', function(){
        assert.equal(Isweekday('Tuesday'), true);
    })
    it('should return true if friday days is the day of the week', function(){
        assert.equal(Isweekday('Friday'), true); 
    })
    it('should return false if Sunday is the day of the week', function(){
        assert.equal(Isweekday('Sunday'), false);
    })
});
