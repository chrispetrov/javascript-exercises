const add = function(first,second) {
	return first+second;
};

const subtract = function(first,last) {
	return first-last;
};

const sum = function(arrayy) {
  let sumOf=0;
	if(!(arrayy.length===0)){
      sumOf=arrayy.reduce(function(a,b){
      return a+b;
    });
}
  return sumOf
};

const multiply = function(aray) {
  let proizvod=0;
  proizvod=aray.reduce((a,b)=> a*b );
  return proizvod;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	 if(num<=1){
    return 1;
  }
  else{
    return num*factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
