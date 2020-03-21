'use strict';
	var signInPage = function() {
	    this.emailInput = element(by.id('email'));
	    this.passwordInput = element(by.id('passwd'));
	    this.submitButton = element(by.id('SubmitLogin')); 
	    this.setEmail = function(userName) {
	     this.emailInput.sendKeys(userName);
	    };
	    this.setPassword = function(password) {
	     this.passwordInput.sendKeys(password);
	    };
	    this.clickSubmit = function(){
	      this.submitButton.click();
	    };
	   
	}; 
	module.exports = new signInPage();