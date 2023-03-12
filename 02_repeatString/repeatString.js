const repeatString = function(str,num) {        
    var fullString='';
    if(num<0){
        return 'ERROR'
    }
    while(num){
        fullString+=str;
        num--;
    }
    return fullString;

};

// Do not edit below this line
module.exports = repeatString;
