/* David Clark
   07/26/12
   Assignment 4
   Visual Frameworks function library.
*/

function checkEmailPattern (emailCheck) {
	var emailAddress = emailCheck
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
	if (emailPattern.test(emailAddress)) {
		console.log("This email follows the aaa@bbb.ccc pattern.");
	} else {
		console.log("This email does not follow the aaa@bbb.ccc pattern.");
	}
	
};

checkEmailPattern("Ackdamos@fullsail.edu");

function fixMoney(moneyToFix) {
	var money = moneyToFix
	money.toFixed(2)
	return console.log(money.toFixed(2));
};

fixMoney(25643.76753);

function checkIfUrl (testUrl) {
	var url = testUrl
	var testCheck = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
	var isUrl = testCheck.test(url);
	console.log("This string is a " + isUrl + " URL.");
	if (url.charAt(4) === "s") {
		console.log("This string is a https URL.");
	}
	if (url.charAt(4) === ":") {
		console.log("This string is a http URL.");
	}

};

checkIfUrl("https://www.facebook.com/");

var checkNumber = function (testNumber) {
	var phoneNumber = testNumber;
	var checkTest = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (checkTest.test(phoneNumber)) {
		console.log("This string is a phone number.");
	} else {
		console.log("This string isn't a phone number.");
	}
};

checkNumber("315-643-2057");

function changeSeparation (changeString) {
	if (changeString) {
		console.log("a/" + "b/" + "c/");
	}
};

changeSeparation("a,b,c");

function getSmallestNumber () {
	function bigNumber (element, index, array) {
		return (element >= 25);
	};
	var arrayToCheck = [
		234,
		43,
		24,
		46,
		124,
		26
	];
	arrayToCheck.sort(function (a, b)) {
		return a - b;
	};
	console.log(arrayToCheck.shift());
};