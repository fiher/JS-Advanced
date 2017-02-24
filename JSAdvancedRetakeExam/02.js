/**
 * Created by Lucifer on 19-Dec-16.
 */
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
myList.addLeft("baba ti");
myList.addRight("moito momiche");
myList.clear();
myList.addLeft("baba ti");
myList.addLeft("huj");
myList.clear();
myList.addLeft(3.40);
console.log(""+myList);