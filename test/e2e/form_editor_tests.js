var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
    /*beforeEach : function(browser) { //login
        browser
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')
            .end()
    },*/


    'editor to dashboard' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

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

    'editor to signin' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

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

    'editor to employees' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

            .useXpath()
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/addemployees')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'editor to appointments' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

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

    'editor to history' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

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

    

    'editor to settings' : function(browser) {
        browser
            //login
            .url('http://nocontext-staging.herokuapp.com/login')
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .waitForElementVisible('/html/body')

            .useXpath()
            .click('/html/body/div/aside/section/ul/li[8]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/accountSettings')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

};
