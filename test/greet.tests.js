import assert from "assert";
import greet from"../greet.js";



describe('Test my greet function' , function(){
    it(' should return hello neighbour' , function(){
        assert.equal(greet('neighbour'), 'Hello, neighbour');

    });
    it('should return hello if no name has passed' , function(){
        assert.equal( greet(''), 'Hello, ');

    });
    
});