const sumAll = function(begin,end) {
    
    if(typeof(end)!='number'||typeof(begin)!='number'){
        return 'ERROR';
    }
    let sum=0;
    if(begin>end){
        let pom=end;
        end=begin;
        begin=pom;
    }
    if(begin<0 || end<0 ){
        return 'ERROR';
    }
    for(let i=begin;i<=end;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
