/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      let convertJson = {
        initNum: initNum,
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      }
      var err = 0;
      if (initNum == '') err += 1;
      if (initUnit == 'invalid unit' || returnUnit == 'invalid unit') err+= 2;
      //res.json
      switch (err) {
        case 0:
          res.status(200).json(convertJson);
          break;
        case 1:
          res.json({ error: 'invalid number' });
          break;
        case 2:
          res.json({ error: 'invalid unit' });
          break;
        case 3:
          res.json({ error: 'invalid number and unit' });
          break;
        default:
      }
    });
    
};
