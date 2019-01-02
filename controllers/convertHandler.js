/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input;
    let split = /[a-zA-Z]/.exec(input);
    if (split)
      result = input.substring(0, split.index);
    //default 1
    if (result == '') result = '1';
    //fractions
    let fraction = result.indexOf('/');
    if (fraction != -1) {
      let a = result.substring(0, fraction);
      let b = result.substring(fraction + 1);
      if (a && b && a.indexOf('/') == -1 && b.indexOf('/') == -1)
        result = parseFloat(a) / parseFloat(b);
      else
        result = '';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result = 'invalid unit';
    let split = /[a-zA-Z]/.exec(input);
    if (split)
      result = input.substring(split.index);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal': 
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'l': 
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs';
        break;
      case 'km':
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit.toLowerCase()) {
      case 'gal': 
        result = 'gallons';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'l': 
        result = 'liters';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'km':
        result = 'kilometers';
        break;
      default:
        result = '';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase()) {
      case 'gal': 
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l': 
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        return '';
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result =(initNum) + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + (returnNum) + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
