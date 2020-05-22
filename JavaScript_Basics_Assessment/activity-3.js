// Activity 3: JavaScript Arrays and Loops:

// Start off by creating an array with three student names.
let studentNames = ["Mario", "Yoshi", "Koopa"];
// Create a loop that will prompt the user for three more names.
function createStudentList() {
  for (let i = 0; i < 3; i++) {
    const name = prompt("Enter a name");
    studentNames.push(name);
  }
  // After every user input, store the new name into the array.
  // Create a new loop that will iterate through the array and console log each element of the array.
  for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames);
    return studentNames;
  }
}
createStudentList();
