/* David Clark
   07/26/12
   Assignment 4
   Visual Frameworks function library.
*/

function checkEmailPattern (emailCheck) {
	var emailAddress = emailCheck
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
	if (emailPattern.test(emailAddress)) {
		console.log("This email follows the pattern.");
	} else {
		console.log("This email does not follow the pattern.");
	}
	
};

checkEmailPattern("asdfg@gdsfs.com");