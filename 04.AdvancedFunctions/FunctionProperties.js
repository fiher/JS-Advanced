/**
 * Created by Lucifer on 20-Oct-16.
 */
function max(arr) {
    return arr;

}
function inner(arr) {
    console.log(inner.caller); // показва кой вика функцията
}
function outer () {
    inner();
}