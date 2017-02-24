/**
 * Created by Lucifer on 19-Dec-16.
 */
class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.scores = [];
    }
    addScore(score){
        let number = Number(score);
        if(Number(score)== score){
                if(number+1 != NaN) {
                    if(number != undefined && number != NaN) {
                        this.scores.push(number);
                    }
                }
        }
        return this;
    }
    get highestScore(){
        //let largest = Math.max.apply(Math,this.scores);
        this.scores.sort(function(a,b){
            return b-a;
        });
        return  this.scores[0];
    }
    get scoreCount(){
        return this.scores.length;
    }
    get topFiveScore(){
        this.scores.sort(function(a,b){
           return b-a;
        });
        let result = [];
        for(let i = 0; i<5;i++){
            if(this.scores[i]!= undefined) {
                result.push(this.scores[i]);
            }
        }
        return result;
    }
    toString(){
        let result ='';
        this.scores.sort(function(a,b){
            return b-a;
        });
            result = `${this.nickName}: [${this.scores}]`;
        return result;
    }
}
let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
console.log();
let maria = new Player("Maria")
    .addScore(350)
    .addScore(779)
    .addScore(180);
console.log('Highest score: ' + maria.highestScore);
console.log(`Top 5 score: [${maria.topFiveScore}]`);
console.log('' + maria);
let player = new Player('Misho');

player.addScore(130);
player.addScore(240);
player.addScore(0);
player.addScore('Pesho');
console.log(''+player);
console.log(`Top 5 score: [${player.topFiveScore}]`);
