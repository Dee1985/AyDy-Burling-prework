// Activity 2: JavaScript Variables, Alerts, Prompts, and Conditionals:

// Grab a user input using a prompt() and store it in a variable.
function promptUser() {
  const userName = prompt("Please enter your first name");
  const charLimit = 4;
  /*Add a conditional statement where if the variable's length is greater than 4, we alert the user that their name is greater than four characters. Otherwise, alert that their name is less than four characters.*/
  for (let i = 0; i <= charLimit; i++) {
    if (userName.length > charLimit) {
      alert("Your name is greater than 4 characters long");
    } else if (userName.length < charLimit) {
      alert("Your name is less than 4 characters long");
    } else {
      alert("Your name is exactly 4 characters long"); //I added this extra statement in case the user entered a name that was 4 characters in length
    }
  }
}
promptUser();
