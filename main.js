function greeting(username, userRole) {
  return `Name: ${username}, Role: ${userRole}`;
}

console.log(greeting("Alexis", "Student"));

function calculateCosts(numberOfAttendees, costPerAttendee) {
  let total = numberOfAttendees * costPerAttendee;
  if (numberOfAttendees > 100) {
    total *= 0.9;
  }

  return total;
}

console.log("Task Two: ");
console.log(calculateCosts(120));

function emailValidator(email) {
  return (
    email.includes("@") &&
    email.includes(".") &&
    !email.includes(" ") &&
    email.lastIndexOf(".") > email.indexOf("@")
  );
}

console.log("Task Three: ");
console.log(emailValidator("mike.denney@cooldude.gg"));
