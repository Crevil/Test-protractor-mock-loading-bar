var mock = require('protractor-http-mock');

describe('angular-loading-bar and protractor-http-mock', function () {
	var getNoLoading, getLoading;
	
	beforeEach(function () {
		var getMock = {
            request: {
				method: 'get',
                path: 'http://kendo.cdn.telerik.com/2016.1.112/js/kendo.all.min.js'
            },
            response: {
                data: 'data'
            }
        };
		
		mock([getMock]);
		browser.get('index.html');
		getNoLoading = element(by.id('getWithout'));
		getLoading = element(by.id('getWith'));
	});
	
	it('should resolve data without loading bar', function () {
		getNoLoading.click().then(function () {
			var loading = element(by.id('indicator'));
			
			expect(loading.getText()).toBe('');
		});
	});
	
	it('should resolve data with loading bar', function () {
		getLoading.click().then(function () {
			var loading = element(by.id('indicator'));
		
			expect(loading.getText()).toBe('');
		});
	});
});
