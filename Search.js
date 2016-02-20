/**
 * main serch engine
 */

var Factual = require('factual-api');
var YOUR_KEY = 'a9DtHbJ5UyLUua4umVtSAgQzwpd1ub8aeEBr2zhg';
var YOUR_SECRET = 'sQbsWMHDMdhz9rMMlkJ3OtcoUnx91TuXiG5dDIKg';

var factual = new Factual(YOUR_KEY, YOUR_SECRET);

factual.get('/t/places-us/schema', function(error, res) {
	console.log(res.view);
});

// find California, USA
factual.get('/t/world-geographies?', {
	q : "los angeles",
	filters : {
		"$and" : [ {
			"name" : {
				"$eq" : "California"
			}
		}, {
			"country" : {
				"$eq" : "US"
			}
		}, {
			"placetype" : {
				"$eq" : "region"
			}
		} ]
	},
	select : "contextname,factual_id"
}, function(error, res) {
	console.log(res.data);
});
// returns 08649c86-8f76-11e1-848f-cfd5bf3ef515 as the Factual Id of
// "California, US"
