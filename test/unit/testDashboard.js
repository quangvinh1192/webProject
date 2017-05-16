var date1 = new Date("12-29-1993");
var date2 = new Date(22-11-1131);
var date3 = new Date("happy");
var date4 = new Date("99-99-99999");

QUnit.test('dateToString Test', function () {
  QUnit.assert.deepEqual(dateToString(date1),"undefined NaN NaN","testing December 29 1993");
  QUnit.assert.deepEqual(dateToString(date2),"December 31 1969","testing Bad Input w/Numerals");
  QUnit.assert.deepEqual(dateToString(date3),"undefined NaN NaN","testing Bad Input w/Strings");
  QUnit.assert.deepEqual(dateToString(date4),"undefined NaN NaN","testing Bad Input 99-99-99999");

});
