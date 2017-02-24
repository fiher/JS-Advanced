/**
 * Created by Lucifer on 20-Oct-16.
 */
let commandProcessor = (function()                                      {
    let text = ''                                                       ;
   return                                                               {
       append: (newText) => text += newText,
       removeStart: (count) => text = text.slice(count),
       removeEnd: (count) => text = text.slice(0,text.length- count),
       print: function()                                                {
           console.log(text)                                            }}
                                                                        }
)();
console.log(commandProcessor.append("pesho"))                           ;
console.log(commandProcessor.append("gosho"))                           ;