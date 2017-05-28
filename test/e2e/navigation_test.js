var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    'home to login': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li[5]/a')
            .assert.urlEquals('http://fubar-staging.herokuapp.com/login')
            .assert.containsText('/html/body/header/div/form/div[3]/div/button', "Sign in")
            .end();
    },

    'login to home': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/login')
            .useXpath()
            .waitForElementVisible("nav")
            .click("/html/body/nav/div/div[1]/a")
            .assert.urlEquals('http://fubar-staging.herokuapp.com/')
            .end();
    },

    'home to overview': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li[1]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/#overview")
            .end();
    },

    'home to testimonial': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li[2]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/#testimonial_blk")
            .end();
    },

    'home to pricing': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li[3]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/#pricing")
            .end();
    },

    'home to contact': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li[4]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/#contact_us")
            .end();
    },

    'home to register': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/')
            .useXpath()
            .click('//*[@id="navbar-collapse-1"]/ul/li[5]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/register")
            .end();
    },

    'login to register': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/login')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/register")
            .end();
    },

    'register to login': function(browser) {
        browser
            .url('http://fubar-staging.herokuapp.com/register')
            .useXpath()
            .waitForElementVisible("nav")
            .click('//*[@id="navbar-collapse-1"]/ul/li/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/login")
            .end();
    }
}
