var config = require('../../nightwatch.conf.BASIC.js');

var name = new Date().getTime().toString();
var email = name.concat("@test.com");

module.exports = {
    /*beforeEach : function(browser) { //login
        browser
            .url('http://nocontext-staging.herokuapp.com/login')
            .useCss()
            .waitForElementVisible('body')
            .setValue("#email","test@ucsd.edu")
            .setValue("#password","test")
            .useXpath()
            .click('/html/body/header/div/div/div/form/div[3]/div/button')
            .waitForElementVisible('/html/body')
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            .end()
    },*/

    'employees to dashboard' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
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

    'employees to signin' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
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

    'employees to appointments' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[5]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/appointments")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'employees to history' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
            .useXpath()
            .click('/html/body/div/aside/section/ul/li[6]/a')
            .assert.urlEquals("http://nocontext-staging.herokuapp.com/history")
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'employees to form editor' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
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

    'employees to settings' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
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

    'Test add employee' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
            .useXpath()
            .click('//*[@id="add-employee-show"]')
            .setValue('//*[@id="inputName"]', name)
            .setValue('//*[@id="inputEmail"]', email)
            .setValue('//*[@id="inputPhone"]', "000-000-0000")
            .click('//*[@id="add-employee-modal"]/div/div/div[2]/div[1]/div/div/div[2]/form/input')
            .assert.containsText('//*[@id="notRegisteredEmployees"]/tbody', name)
            .assert.containsText('//*[@id="notRegisteredEmployees"]/tbody', email)
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },

    'Test add cancel' : function(browser) {
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
            .useXpath()
            .click('//*[@id="add-employee-show"]')
            .setValue('//*[@id="inputName"]', name)
            .setValue('//*[@id="inputEmail"]', email)
            .click('//*[@id="add-employee-modal"]/div/div/div[2]/div[2]/button[1]')
            .assert.hidden('//*[@id="add-employee-modal"]/div') //TODO ???
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    }, 

    'Test add nothing' : function(browser){
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
            .click('/html/body/div/aside/section/ul/li[4]/a')
            .waitForElementVisible('/html/body')
            
            .useXpath()
            .click('//*[@id="add-employee-show"]')
            .click('//*[@id="add-employee-modal"]/div/div/div[2]/div[1]/div/div/div[2]/form/input')
            .assert.not.hidden('//*[@id="add-employee-modal"]/div') //TODO ??? extra questionable???
            //logout
            .url('http://nocontext-staging.herokuapp.com/dashboard')
            .useCss()
            .waitForElementVisible('body')
            .useXpath()
            .click("/html/body/div/header/nav/a[2]")
            .end()
    },
}
