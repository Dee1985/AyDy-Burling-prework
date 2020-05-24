function promptUser() {
	const userName = prompt('Please enter your first name');
	const charLimit = 4;

	if (userName.length > charLimit) {
		alert('Your name is greater than 4 characters long');
	} else if (userName.length < charLimit) {
		alert('Your name is less than 4 characters long');
	} else {
		alert('Your name is exactly 4 characters long'); 
	}
}

promptUser();
