/**
 * Created by Lucifer on 24-Oct-16.
 */
function solve() {
    let obj = {};
    obj.extend = function(template){
        for(let prop in template){

            if(typeof template[prop]=='function'){
                Object.getPrototypeOf(obj)[prop]=template[prop];
            }else{
                obj[prop] = template[prop];
            }
        }
    };
    return obj;
}