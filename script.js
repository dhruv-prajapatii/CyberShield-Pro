
// ---------------- PASSWORD CHECKER ----------------
function checkPassword() {
  let password = document.getElementById("password").value;
  let message = document.getElementById("message");
  let bar = document.getElementById("strengthBar");

  let strength = 0;

  if (password.length > 5) strength += 25;
  if (password.match(/[A-Z]/)) strength += 25;
  if (password.match(/[0-9]/)) strength += 25;
  if (password.match(/[@$!%*?&]/)) strength += 25;

  bar.style.width = strength + "%";

  if (strength <= 25) {
    bar.style.background = "red";
    message.innerText = "Weak Password ❌";
  } 
  else if (strength <= 75) {
    bar.style.background = "orange";
    message.innerText = "Medium Password ⚠️";
  } 
  else {
    bar.style.background = "lime";
    message.innerText = "Strong Password 🔐";
  }
}


// ---------------- QUIZ SECTION ----------------
let current = 0;

const questions = [
  { q: "What is phishing?", a: "Fake message to steal data", b: "Virus attack", correct: 1 },
  { q: "What is strong password?", a: "123456", b: "A-Z + numbers + symbols", correct: 2 },
  { q: "What is malware?", a: "Good software", b: "Harmful software", correct: 2 },
  { q: "What is firewall?", a: "Security system", b: "Game app", correct: 1 },
  { q: "What is hacking?", a: "Unauthorized access", b: "Browsing internet", correct: 1 },
  { q: "What is 2FA?", a: "Two factor authentication", b: "File system", correct: 1 },
  { q: "Safe website starts with?", a: "http://", b: "https://", correct: 2 },
  { q: "What is ransomware?", a: "File locking virus", b: "Antivirus", correct: 1 },
  { q: "What is VPN?", a: "Secure network", b: "Game app", correct: 1 },
  { q: "Social engineering is?", a: "Human trick to steal data", b: "Coding method", correct: 1 }
];

// LOAD QUESTION
function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
  document.getElementById("opt1").innerText = questions[current].a;
  document.getElementById("opt2").innerText = questions[current].b;
  document.getElementById("quizResult").innerText = "";
}

// ON PAGE LOAD
window.onload = function () {
  loadQuestion();
};

// ANSWER CHECK
function answer(isCorrect) {
  let result = document.getElementById("quizResult");

  if (isCorrect) {
    result.innerText = "Correct Answer ✅";
    result.style.color = "lime";
  } else {
    result.innerText = "Wrong Answer ❌";
    result.style.color = "red";
  }
}

// NEXT QUESTION
function nextQuestion() {
  current++;
  if (current >= questions.length) {
    current = 0;
  }
  loadQuestion();
}


// ---------------- CONTACT FORM ----------------
function send() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  let result = document.getElementById("contactResult");

  if (!name || !email || !msg) {
    result.innerText = "Please fill all fields ❌";
    result.style.color = "red";
  } else {
    result.innerText = "Message Sent Successfully ✅";
    result.style.color = "lime";
  }
}