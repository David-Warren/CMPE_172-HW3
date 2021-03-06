#!/usr/bin/env node

//Owner: David Warren
//Date: October 6, 2016
//Class: CMPE 172
//Homework 3

var uu = require('underscore'); 

var monday = [
    {
	'name' : 'Write a tutorial',
	'duration' : 180
    },
    
    {
	'name' : 'Some web development',
	'duration' : 120
    }
];

var tuesday = [
    {
	'name' : 'Keep writing that tutorial',
	'duration' : 240
    },
    {
	'name' : 'Some more web development',
	'duration' : 180
    },
    {
	'name' : 'A whole lot of nothing', 
	'duration' : 240
    }
];



var tasks = [monday, tuesday];
/*
var result = uu.reduce(tasks, function (accumulator, current){return accumulator.concat(current)}) 
    //return accumulator.concat(current);
    })uu.map(tasks, function (task){ return duration/60 }) {
	//return (duration/60);  //Converting duration in minutes to hours
	})uu.filter(tasks, function (duration) { return duration > 1 }) {
	   // return duration >1;  //Filtering out everything that took one hour or more
	    })uu.map(tasks, function (duration) {return duration * 20 }) {
		//return duration * 20;  //Multiplying hours by hourly-rate $20/hr 
		})uu.reduce(task, function (accumulator, current) {return [(+accumulator) + (+current)] }) {
		    //return [(+accumulator) + (+current)];
		    })uu.map(tasks, function(dollar_amount) {return '$' + dollar_amount.toFixed(2)} {
			//return '$' + dollar_amount.toFixed(2);)
			})uu.reduce(tasks, function (formatted_dollar_amount) {return formatted_dollar_amount}) {
			    //return formatted_dollar_amount;  
			 */


//var tasks = [monday, tuesday];
/*
var result = _.chain(tasks)
uu.reduce(tasks, function (accumulator, current) {return accumulator.concat(current)})
    .map(tasks, function (task){ return tasks.duration/60 })
        .filter(tasks, function (duration) { return duration > 1; })
            .map(tasks, function (duration) {return duration * 20; })
              .reduce(tasks, function (accumulator, current) {return [(+accumulator) + (+current)]})
                .map(tasks, function(dollar_amount) {return '$' + dollar_amount.toFixed(2)})                                         .reduce(tasks, function (formatted_dollar_amount) {return formatted_dollar_amount})
                          .value();
*/
/*
var out = uu.chain(tasks) 
      .reduce(tasks, function(total, current) {return total.concat(duration)
*/

var sum = function(tasks) { 
    return uu.reduce(tasks, function(duration) {return duration;});
};
var time = function(sum) {
    return uu.map(tasks, function(sum) {return sum / 60});
  }; 

console.log(sum);


 // console.log("You've made over " + result + " for working");
