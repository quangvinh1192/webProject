var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Regular Baz.js fail test': function(browser) {
    browser
      .url('https://fubar-master.herokuapp.com/#overview')
      .end();
  },

};
