'use strict';
	var data = require('../Data/data.json');
	var homePage = function() {
	    this.signInLink = element(by.css('a.login'));
	   
	    this.get = function() {
	    browser.get(data.url);
	    };
	    this.clickLogin = function(){
	      this.signInLink.click();
	    };
	   
	}; 
	module.exports = new homePage();