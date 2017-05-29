var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    beforeEach : function(browser) { //login
        browser
            .url('http://fubar-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click("/html/body/header/div/form/div[3]/div/button")
            .waitForElementVisible('/html/body')
            .end()
    },

    afterEach : function(browser) { //logout
        browser
            .url('http://fubar-staging.herokuapp.com/dashboard')
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'dashboard to sign in' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .assert.urlEquals("http://fubar-staging.herokuapp.com/office/592a3d14f8d4f2000fe12bd6/checkin")
            .end()

    },

    'dashboard to employees' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .assert.urlEquals('http://fubar-staging.herokuapp.com/addemployees')
            .end()
    },

    'dashboard to form editor' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .assert.urlEquals('http://fubar-staging.herokuapp.com/forms')
            .end()
    },

    'dashboard to settings' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[6]/a')
            .assert.urlEquals('http://fubar-staging.herokuapp.com/accountSettings')
            .end()
    },

}
