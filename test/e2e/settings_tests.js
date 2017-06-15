var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    beforeEach : function(browser) { //login
        browser
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[6]/a')
            .waitForElementVisible('/html/body')
            .end()
    },

    'settings to dashboard' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[2]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/dashboard")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'settings to signin' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/office/592a3d14f8d4f2000fe12bd6/checkin")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },


    'settings to employees' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/forms')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'settings to appointments' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/appointments')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'settings to history' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[6]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/history')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'settings to form editor' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[7]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/forms')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },


    'test change company info' : function(browser) { 
        browser
            .waitForElementVisible('body')
            .useXpath()
            .setValue('//*[@id="companyName"]', "testeroni")
            .setValue('//*[@id="phone"]', "123-456-7890")
            .click('/html/body/div/div/section[2]/div[5]/div/div/form/div[2]/button')
            .waitForElementVisible('/html/body')
            .assert.containsText('/html/body/div/div/section[2]/div[1]/div/div/div', "Company info saved.")
            .assert.containsText('//*[@id="companyName"]', "testeroni")
            .assert.containsText('//*[@id="phone"]', "123-456-7890")
            //check sign in screen
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .waitForElementVisible('html/body')
            .assert.containsText('/html/body/h1/strong', "Welcome to testeroni")
            //set info back
            .url('http://nocontext-staging.herokuapp.com/businesssetting')
            .setValue('//*[@id="companyName"]', "test")
            .setValue('//*[@id="phone"]', "123-867-5309")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    //I actually am unable to do the other two because there is no way to get unique xpaths to them
};
