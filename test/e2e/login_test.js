var config = require('../../nightwatch.conf.BASIC.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Login Success and Logout Test': function(browser) {
    browser
      .url('http://nocontext-staging.herokuapp.com/login')
      .waitForElementVisible('body')
      .setValue("#email","c4xie@ucsd.edu")
      .setValue("#password","123123")
      .useXpath()
      .click("/html/body/header/div/div/div/form/div[3]/div/button")
      .waitForElementVisible('/html/body')
      .assert.containsText("/html/body/div/div/section[1]/h1","Dashboard")
      .click("/html/body/div/header/nav/a[2]")
      .waitForElementVisible('/html/body')
      .assert.containsText("/html/body/header/div/div/div/form/div[3]/div/button","SIGN IN")
      .end();
  },

  'Login Unsuccessful Test': function(browser) {
    browser
      .url('http://nocontext-staging.herokuapp.com/login')
      .useCss()
      .waitForElementVisible('body')
      .setValue("#email","c4xie@apple.edu")
      .setValue("#password","1jhk123")
      .useXpath()
      .click("/html/body/header/div/div/div/form/div[3]/div/button")
      .assert.containsText("/html/body/header/div/div/div[2]","Invalid Email/Password Combo")
      .end();
  },

  'Login Unsuccessful then Successful Test': function(browser) {
    browser
      .url('http://nocontext-staging.herokuapp.com/login')
      .useCss()
      .waitForElementVisible('body')
      .setValue("#email","c4xie@apple.edu")
      .setValue("#password","1jhk123")
      .useXpath()
      .click("/html/body/header/div/div/div/form/div[3]/div/button")
      .assert.containsText("/html/body/header/div/div/div[2]","Invalid Email/Password Combo")
      .useCss()
      .setValue("#email","c4xie@ucsd.edu")
      .setValue("#password","123123")
      .useXpath()
      .click("/html/body/header/div/div/div/form/div[3]/div/button")
      .waitForElementVisible('/html/body')
      .assert.containsText("/html/body/div/div/section[1]/h1","Dashboard")
      .click("/html/body/div/header/nav/a[2]")
      .waitForElementVisible('/html/body')
      .assert.containsText("/html/body/header/div/div/div/form/div[3]/div/button","SIGN IN")

            .end();
    },

    'Login no input test' : function(browser) {
        browser
            .url('https://nocontext-staging.herokuapp.com/login')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .assert.urlEquals('https://nocontext-staging.herokuapp.com/login')
            .end()
    },

    'No Login Test' : function(browser) {
        browser
            .url('https://nocontext-staging.herokuapp.com/dashboard')
            .waitForElementVisible('body')
            .assert.urlEquals('https://nocontext-staging.herokuapp.com/')
            .end()
    },

};
