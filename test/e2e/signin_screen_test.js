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
            .click('/html/body/div/aside/section/ul/li[3]/a')
            .end()
    },

    'test no appointment' : function(browser) {
        browser
            .waitForElementVisible('body')
            .useXpath()
            .setValue('//*[@id="inputFirst"]', "no")
            .setValue('//*[@id="inputLast"]', "appointment")
            .setValue('//*[@id="inputPhone"]', "0000000000")
            .click('//*[@id="checkin"]')
            .assert.containsText("/html/body/div/div", "No appointment found")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    //I'm not sure how to make an appointment so this is about where the tests end
    //or how to check that the no input thing pops up
}
