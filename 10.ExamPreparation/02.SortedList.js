/**
 * Created by Lucifer on 31-Oct-16.
 */
let SortedList = require('./Solution').SortedList;
require('../../../Mocha/tests');
describe(function(){
   let myList = {};
    beforeEach(function(){
        myList  = new SortedList();
    })
    it("should have a constructor",function(){
        "use strict";
        expect(typeof SortedList).to.equal.('function');
        
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true,"Didnt find add function.");
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true,"Didnt find add function.");
    })
});