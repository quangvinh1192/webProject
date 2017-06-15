var config = require('../../nightwatch.conf.BASIC.js');

var date = new Date();
var day = date.toLocaleDateString();
var name = date.getTime().toString();
var email = name.concat("@test.com");
var phone = "111-222-3333";
var time = "12:00";

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
            .end()
    },*/


    'appointment to dashboard' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[2]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/dashboard")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()

    },

    'appointment to sign in' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
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

    'appointments to employees' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
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


    'appointments to history' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[6]/a')
            .assert.urlEquals('http://nocontext-staging.herokuapp.com/history')
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'appiontments to form editor' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
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

    'appointments to settings' : function(browser) {
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

            .url('http://nocontext-staging.herokuapp.com/appointments')
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

    /*'new appointment test' : function(browser) {
        browser
            .url('http://nocontext-staging.herokuapp.com/appointments')
            .waitForElementVisible('body')
            .useXpath()
            //make appointment
            .click('//*[@id="add-appt-show"]')
            .setValue('//*[@id="inputName"]', name)
            .setValue('//*[@id="inputEmail"]', email)
            .setValue('//*[@id="inputPhone"]', phone)
            .setValue('//*[@id="inputDate"]', day)
            .setValue('//*[@id="inputTime"]', time)
            .click('//*[@id="add-appt-modal"]/div/div/div[2]/form/input')
            //this might not be right
            .assert.containsText('/html/body/div[1]/div/section[2]', name)

            //check in
            .url('https://nocontext-staging.herokuapp.com/office/592a3d14f8d4f2000fe12bd6/checkin')
            .waitForElementVisible('/html/body')
            .setValue('//*[@id="inputName"]',name)
            .setValue('//*[@id="inputPhone"]', phone)
            .click('//*[@id="checkin"]')
            .assert.containsText('/html/body/div/div/div/div[2]',"Welcome to test. You have checked in!")

            //verify
            .url('https://nocontext-staging.herokuapp.com/history'
            .waitForElementVisible('/html/body')
            .assert.containsText('/html/body/div/div/section[2]/div/div/div[2]/table', name)

            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useXpath()
            .waitForElementVisible('/html/body')
            .click("/html/body/div/header/nav/a[2]")
            .end()
    }*/

};
