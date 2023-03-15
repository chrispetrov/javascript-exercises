const fibonacci = function(number) {
    const fibunachiArray=[1,1];
    number=parseInt(number);
    if(number<1) return "OOPS";
    for(let i=2;i<number;i++){
        fibunachiArray[i]=fibunachiArray[i-1]+fibunachiArray[i-2];
    }
    return fibunachiArray[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
