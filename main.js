//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//6) Write a function called 'printObject' which takes a single object argument and console.log's each key-value pair in the format key is value on separate lines.
//6a) printObject({ a: 10, b: 20, c: 30 }) should print:
//a is 10
//b is 20
//c is 30
// var printObject = function (userObj) {
// 	for (i in userObj) {
// 	console.log(i, userObj[i]); 
// 		//logs a 10
// 		//logs b 20
// 		//logs c 30
// 	};
// 	// console.log(i, userObj[i]);
// };
// printObject({ a: 10, b: 20, c: 30 })

var printObject = function (userObj) {
	for (key in userObj) {
	console.log(key + ' is ' + userObj[key]);
	}
};
printObject({ a: 10, b: 20, c: 30 })
printObject({ firstName: 'pork', lastName: 'chops' }) 

// 6b) printObject({ firstName: 'pork', lastName: 'chops' }) should print:
//firstName is pork
//lastName is chops