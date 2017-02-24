/**
 * Created by Lucifer on 24-Oct-16.
 */
function solve() {
    String.prototype.isEmpty = function () {
        return this == '';
    };
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        } else {
            return str + this.toString();
        }
    };
    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        } else {
            return str + this.toString();
        }
    };
    String.prototype.truncate = function(str){
        
        if(this.length()<=n){
            return this.toString();

        }else{
            let tokens = this.split(' ');
            let result = tokens[0];
            if(n>0&&n<=3){
                return '.'.repeat(n);
            }
            if(!this.includes(' ')){
                return this.slice(0,n-3) + '...';
            }

            for(let i = 1; i< tokens.length;i++){
               if(result.length+tokens[i]+4>n){
                   return result + '...';
               }
                result += ` $(tokens[i])`;
            }
        }
    }
}