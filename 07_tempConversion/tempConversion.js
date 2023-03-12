const convertToCelsius = function(Fnum) {
  let Cnum=(Fnum-32)*(5/9);
  Cnum=parseFloat(Cnum.toFixed(1));
  
  return Cnum;
  
};

const convertToFahrenheit = function(Cnum) {
  let Fnum=(Cnum*(9/5)+32);
  Fnum=parseFloat(Fnum.toFixed(1));
  return Fnum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
