/**
 * Created by Lucifer on 28-Oct-16.
 */
class Textbox{
    constructor(selector,regex){
        this._elements = $(selector);
        this._invalidSymbols = regex;
        let _that = this;

        this._elements.each(function(index, elem){
           $(elem).on('input',function(){
               _that.value = elem.value;

           });
        });
    }
    get value(){
        return this._value;
    }
    set value(value){
        this._value = value;
        this.changeValues();
    }
    get elements(){
        return this._elements;
    }
    changeValues(){
        let _that =this;
        this._elements.each(function(index,elem){
           elem.value = _that.value;
        });
    }
    isValid(){
        return !this._invalidSymbols.test(this._value);
    }

}
