/*
  ============================================
  EXTERNAL JAVASCRIPT FILE — script.js
  ============================================
  This file is linked from js-external.html using:
      <script src="script.js"></script>

  JavaScript adds BEHAVIOR and INTERACTIVITY to a web page.
  HTML provides the structure, CSS provides the style,
  and JavaScript makes things HAPPEN when the user interacts.

  Key concepts used here:
  - let        : declare a variable (a value that can change)
  - function   : a reusable block of code that runs when called
  - document   : represents the HTML page in JavaScript
  - getElementById() : find an HTML element by its id
  - .innerHTML : read or change the content inside an element
  - .value     : read what the user typed in an input field
  - onclick    : an event that triggers a function on click
*/

// ============================================
// 1. CLICK COUNTER
// ============================================
// A variable to remember how many times the button was clicked
let count = 0;

// This function runs when the button is clicked
function increaseCount() {
  count = count + 1; // add 1 to the count
  // Find the element with id="count" and change its text
  document.getElementById("count").innerHTML = count;
}

// ============================================
// 2. EMAIL VALIDATION
// ============================================
function validateEmail() {
  // Get the value the user typed in the email field
  let email = document.getElementById("email").value;
  let message = document.getElementById("message");

  // Check if the field is empty
  if (email === "") {
    message.innerHTML = "Please enter an email address.";
    message.className = "error";
    return;
  }

  // Simple check: does it contain an "@" symbol?
  if (email.indexOf("@") === -1) {
    message.innerHTML = "Invalid email! An email must contain @";
    message.className = "error";
    return;
  }

  // If we get here, the email is valid
  message.innerHTML = "Valid email! Thank you.";
  message.className = "success";
}

// ============================================
// 3. DYNAMIC GREETING
// ============================================
function changeGreeting() {
  let name = document.getElementById("nameInput").value;
  let greeting = document.getElementById("greeting");

  if (name === "") {
    greeting.innerHTML = "Please type your name above.";
    greeting.className = "error";
  } else {
    greeting.innerHTML = "Hello, " + name + "! Welcome to JavaScript.";
    greeting.className = "success";
  }
}
