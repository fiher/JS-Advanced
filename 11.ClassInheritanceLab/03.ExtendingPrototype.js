/**
 * Created by Lucifer on 02-Nov-16.
 */
function extendingPrototype(Class){
    Class.prototype.species = "Human";
    Class.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`;
    }
}