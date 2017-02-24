/**
 * Created by Lucifer on 19-Dec-16.
 */
function makeList() {
    let data = [];
    return {
        addLeft: function(item) {
            data.unshift(item);
        },
        addRight: function(item) {
            data.push(item);
        },
        clear: function() {
            data = [];
        },
        toString: function() {
            return data.join(", ");
        }
    };
}
let myList =makeList();
myList.addRight(130);
myList.addRight(240);
myList.addRight(0);
myList.clear();
console.log(""+myList);
//MOCHA-----------------------------------------------------------------------------------------
describe("TODO …", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it("TODO …", function() {
        myList.addRight(130);
        myList.addRight(240);
        myList.addRight(0);
        expect(myList.toString()).to.equal("130, 240, 0");
        myList.clear();
        myList.addLeft("baba ti");
        myList.addRight("moito momiche");
        expect(myList.toString()).to.equal("baba ti, moito momiche");
    });
    it("djofdo",function(){
        myList.clear();
        myList.addLeft("baba ti");
        myList.addLeft("huj");
        expect(myList.toString()).to.equal("huj, baba ti");
    });
    it("djofdo",function(){
        myList.clear();
        myList.addLeft(3.40);
        expect(myList.toString()).to.equal("3.4");
    });
    it("djofdo",function(){
        myList.clear();
        myList.addLeft(3,40);
        myList.addRight(50);
        myList.addLeft(10);
        expect(myList.toString()).to.equal("10, 3.4, 50");
    });
    it("djofdo",function(){
        myList.clear();
        myList.addLeft(3,40);
        myList.addRight(50);
        myList.addLeft(10);
        myList.addRight("mama mia");
        expect(myList.toString()).to.equal("10, 3.4, 50, mama mia");
    });
});
