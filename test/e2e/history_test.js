var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    beforeEach : function(browser) { //login
        browser
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click("/html/body/header/div/form/div[3]/div/button")
            .waitForElementVisible('/html/body')
            .end()
    },


    'history to dashboard' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[2]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/office/592a3d14f8d4f2000fe12bd6/checkin")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()

    },

    'history to sign in' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/office/592a3d14f8d4f2000fe12bd6/checkin")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()

    },

    'history to employees' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/addemployees')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },


    'history to appointments' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/appointments')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'appiontments to form editor' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[7]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/forms')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'history to settings' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/history')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[8]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/accountSettings')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

};
