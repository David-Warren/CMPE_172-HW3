#!/usr/bin/env node

//Project: CMPE_172 Functional Programming Assignment
//Owner: David Warren
//Date: October 10, 2016
//Notes: Worked with Brendan Hart for this assignment. 



var uu = require('underscore'); //This allows the usage of underscore ( _ ) with uu instead

//Monday and Tuesday are two objects that contain items or parameters
var monday = [
        {
            'name'     : 'Write a tutorial',
            'duration' : 180
        },
        {
            'name'     : 'Some web development',
            'duration' : 120
        }
    ];
 
var tuesday = [
        {
            'name'     : 'Keep writing that tutorial',
            'duration' : 240
        },
        {
            'name'     : 'Some more web development',
            'duration' : 180
        },
        {
            'name'     : 'A whole lot of nothing',
            'duration'  : 240
        }
    ];


//We had originally attempted to write this by chaining the underscore functions together, but instead re-tried by doing it one at a time. 
var tasks = [monday, tuesday]; //Placing the two objects into an array called tasks
  var total_duration = uu.reduce(tasks, function(a, b) {return a.concat(b);}); //This takes the two objects and their values and reduces their individual values into single values i.e duration for all is no longer seperate
    var hours_conversion = uu.map(total_duration, function(task) {return task.duration / 60;}); //takes the total duration of tasks and converts from minutes to hours by dividing by 60
      var hours = uu.filter(hours_conversion, function(hours_conversion) {return hours_conversion >= 1;}); //This now filters any task that took less than hour out
        var pay = uu.map(hours, function (hours) {return hours * 20;}); //Takes the remaining hours and multiplies that number by the pay/hr rate
          var combine = uu.reduce(pay, function (accumulator, current) {return [(+accumulator) + (+current)]}); //Takes the pay and reduces it to a single value
            var convert = uu.map(combine, function(dollar_amount) {return ('$' + dollar_amount.toFixed(2))}); //Without this, the dollar amount would be a much longer, complex string of numbers
              var check = uu.reduce(convert, function (formatted_dollar_amount) {return formatted_dollar_amount}); //Takes the format conversion and reduces it to a single value again

console.log("Your check for Monday and Tuesday was a combined " + check + "."); //A simple output of the final result after this combination of map/reduce/filter

