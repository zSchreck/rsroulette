/**
 * main search engine
 */
<script language="javascript" type="text/javascript" src="auth.js"></script>>
var Factual = require('factual-api');
var YOUR_KEY = "a9DtHbJ5UyLUua4umVtSAgQzwpd1ub8aeEBr2zhg";
var YOUR_SECRET = 'sQbsWMHDMdhz9rMMlkJ3OtcoUnx91TuXiG5dDIKg';
var ZIPCODE = '50014';
var factual = new Factual(YOUR_KEY, YOUR_SECRET);

factual.get('/t/places-us/schema', function(error, res) {
	console.log(res.view);
});

//https:// www.factual.com/data/t/restaurants-us#filters={"$and":[{"postcode":{"$search":"50014"}}]}
factual.get('/t/restaurants-us?', {
	filters : {
		"$and" : [ {
			"postcode" : {
				"$search" : ZIPCODE
			}
		} ]
	},
	select : "contextname,factual_id"
}, function(error, res) {
	console.log(res.data);
});
