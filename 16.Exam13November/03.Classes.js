class MailBox{
    constructor(){
        this._messageCount = 0;
        this.mailbox = {};
    }
     addMessage(subject,text){
       if(subject&&text) {

           this.mailbox[subject] = `${text}`;
           this._messageCount = this._messageCount + 1;

           return this;
       }
    }
    deleteAllMessages(){
        this.mailbox ={};
        this._messageCount=0;


        return this.mailbox;
    }
    get messageCount(){
        return this._messageCount;
    }
    findBySubject(substr){
        let result = [];
        if(substr) {
            let obj = {};

            if (this.messageCount > 0) {
                for (let subject in this.mailbox) {
                    let matchResults = subject.indexOf(substr);
                    if (matchResults != -1) {
                        obj = {};
                        obj['subject'] = `${subject}`;
                        obj['text'] = `${this.mailbox[subject]}`;
                        result.push(obj);
                    }
                }

            }
        }
        return result;
    }
    toString(){
        let result = '';

        if(this.messageCount==0){
            return "* (empty mailbox)";
        }else{
            for(let prop in this.mailbox){
                result+=`* [${prop}] ${this.mailbox[prop]}\n`;
            }
            for(let obj of result){
                for(let prop in obj){
                    obj[prop].trim();
                }
            }
            return result;
        }
    }
}

let mb = new MailBox();

mb.addMessage('suzzity alpha', 'content');
mb.addMessage('suzzity beta', 'body');

let report = mb.findBySubject('uzzity');
console.log(report.length);
console.log(report);
console.log(mb);
//expect(report[0].subject).to.contains('suzzity alpha');
//expect(report[0].text).to.contains('content');
//expect(report[1].subject).to.contains('suzzity beta');
//expect(report[1].text).to.contains('body');




