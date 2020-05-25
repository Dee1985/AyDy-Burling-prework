// Activity 3: JavaScript Arrays and Loops:

let studentNames = ["Mario", "Yoshi", "Koopa"];

for (let i = 0; i < 3; i++) {
  const name = prompt("Please enter another name");
  studentNames.push(name);
}

for (let i = 0; i < studentNames.length; i++) {
  console.log(studentNames[i]);
}
