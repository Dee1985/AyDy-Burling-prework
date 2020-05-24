<<<<<<< HEAD
// Activity 2: JavaScript Variables, Alerts, Prompts, and Conditionals:

function promptUser() {
  const userName = prompt("Please enter your first name");
  const charLimit = 4;

  if (userName.length > charLimit) {
    alert("Your name is greater than 4 characters long");
  } else if (userName.length < charLimit) {
    alert("Your name is less than 4 characters long");
  } else {
    alert("Your name is exactly 4 characters long");
  }
=======
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
>>>>>>> 47481f30e797aae20f55713378ed63a505fd2d55
}

promptUser();
