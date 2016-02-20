(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})
({1:[function(require,module,exports){

 var KEY = 'a9DtHbJ5UyLUua4umVtSAgQzwpd1ub8aeEBr2zhg'; 

 var SECRET = 'sQbsWMHDMdhz9rMMlkJ3OtcoUnx91TuXiG5dDIKg'; 
 

 
 module.exports = { 
   key: KEY, 
   secret: SECRET 
 }; 

},{}]},{},[1]);


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
