var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
/*    beforeEach : function(browser) { //login
        browser
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .end()
    },*/

    'test no appointment' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .useCss()
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[3]/a')

            .useXpath()
            .setValue('//*[@id="inputName"]', "no appointment")
            .setValue('//*[@id="inputPhone"]', "0000000000")
            .click('//*[@id="checkin"]')
            .assert.containsText("/html/body/div/div", "No appointment found")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'test wrong day appointment' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .useCss()
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[3]/a')

            .useXpath()
            .setValue('//*[@id="inputName"]', "late")
            .setValue('//*[@id="inputPhone"]', "1234567890")
            .click('//*[@id="checkin"]')
            .assert.containsText('/html/body/div/div/div/div/div/div[2]', "Your appointment is on 06/13/2017. Please check in on this date.")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    /*'test already checked in' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .useCss()
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[3]/a')

            .useXpath()
            .setValue('//*[@id="inputName"]', "bob")
            .setValue('//*[@id="inputPhone"]', "1112223333")
            .click('//*[@id="checkin"]')
            .assert.containsText('/html/body/div/div/div/div/div/div[2]', "You already checked in") //not full string
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    }*/

};
