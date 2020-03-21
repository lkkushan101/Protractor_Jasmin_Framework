exports.config = {
	  framework: 'jasmine2',
	  seleniumAddress: 'http://localhost:4444/wd/hub',
	  specs:['testCase.js'],
	

	onPrepare: function() {
	       var AllureReporter = require('D:/Protractor_Framework/TestCases/node_modules/jasmine-allure-reporter');
	       jasmine.getEnv().addReporter(new AllureReporter({
	       resultsDir: 'c:/temp/allure-results/'
	        })
	      );
}
	   }