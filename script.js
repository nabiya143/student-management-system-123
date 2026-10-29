
"use strict";

// ======================================
// 1. CYBERSECURITY LEARNING MODULES
// ======================================

const courses = [
  {
    id: 1,
    title: "Computer Networking",
    description: "Learn IP addresses, DNS, TCP/IP and ports.",
    level: "Beginner",
    content: `1. What is Computer Networking?

Computer networking connects two or more devices to share information and resources.

2. IP Address
An IP address identifies a device on a network.
Example: 192.168.1.1

3. DNS
DNS stands for Domain Name System.
It converts domain names into IP addresses.

4. TCP/IP
TCP/IP is a collection of protocols used for communication over networks.

5. Network Ports
Ports identify network services.
HTTP - Port 80
HTTPS - Port 443
SSH - Port 22

6. Firewall
A firewall monitors and filters network traffic according to security rules.

7. Important Point
Networking helps cybersecurity learners understand how devices communicate.`
  },
  {
    id: 2,
    title: "Linux Fundamentals",
    description: "Understand Linux commands and permissions.",
    level: "Beginner",
    content: `1. What is Linux?
Linux is an open-source operating system widely used in servers and cybersecurity.

2. Basic Commands
pwd - Displays the current directory.
ls - Lists files and folders.
cd - Changes the directory.
mkdir - Creates a directory.
touch - Creates an empty file.
cat - Displays file contents.
cp - Copies files.
mv - Moves or renames files.

3. File Permissions
Linux permissions control who can read, write or execute files.

4. Users
Linux supports multiple user accounts with different permissions.

5. Terminal
A terminal allows users to interact with the operating system using commands.

6. Important Point
Practice commands in your own computer or a safe virtual machine.`
  },
  {
    id: 3,
    title: "Web Security",
    description: "Learn HTTPS, authentication and web threats.",
    level: "Intermediate",
    content: `1. What is Web Security?
Web security protects websites, servers and users from online threats.

2. HTTPS
HTTPS uses TLS to protect data exchanged between browsers and websites.

3. Authentication
Authentication verifies a user's identity.

4. Authorization
Authorization determines what an authenticated user can access.

5. Phishing
Phishing uses deceptive messages or websites to trick users.

6. SQL Injection
SQL injection occurs when unsafe database queries allow unintended database actions.

7. Cross-Site Scripting
XSS occurs when untrusted content is executed as a script in a user's browser.

8. Protection
Use input validation, secure authentication, software updates and HTTPS.

9. Important Point
Practice security testing only on systems you own or have permission to test.`
  },
  {
    id: 4,
    title: "Ethical Hacking Basics",
    description: "Explore authorized security testing.",
    level: "Beginner",
    content: `1. What is Ethical Hacking?
Ethical hacking is authorized security testing used to identify vulnerabilities.

2. Permission
Always obtain authorization before testing a system.

3. Scope
Test only the systems and activities included in the approved scope.

4. Common Stages
Planning and authorization.
Information gathering.
Vulnerability assessment.
Authorized testing.
Reporting findings.
Remediation and verification.

5. Useful Learning Tools
Wireshark - Network traffic analysis.
Nmap - Network discovery and auditing.
OWASP Juice Shop - A deliberately vulnerable training application.

6. Responsible Reporting
Report security weaknesses to the appropriate system owner.

7. Important Point
Ethical hacking improves security. Never access systems or data without permission.`
  }
];

// ======================================
// 2. DISPLAY MODULES
// ======================================

const courseList = document.getElementById("course-list");
const modulePanel = document.getElementById("module-details");
const moduleContent = document.getElementById("module-content");
const closeModuleButton = document.getElementById("close-module");

function loadCourses() {
  courseList.replaceChildren();

  courses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = course.title;

    const description = document.createElement("p");
    description.textContent = course.description;

    const level = document.createElement("p");
    level.textContent = "Level: " + course.level;

    const button = document.createElement("button");
    button.className = "btn primary";
    button.type = "button";
    button.textContent = "Open Module";

    button.addEventListener("click", () => {
      openModule(course.id);
    });

    card.append(title, description, level, button);
    courseList.appendChild(card);
  });
}

// ======================================
// 3. OPEN STUDY NOTES
// ======================================

function openModule(courseId) {
  const course = courses.find(
    (item) => item.id === Number(courseId)
  );

  if (!course) {
    alert("Module not found.");
    return;
  }

  moduleContent.replaceChildren();

  const heading = document.createElement("h2");
  heading.textContent = course.title;

  const notes = document.createElement("pre");
  notes.className = "study-notes";
  notes.textContent = course.content;

  moduleContent.append(heading, notes);
  modulePanel.hidden = false;

  modulePanel.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

closeModuleButton.addEventListener("click", () => {
  modulePanel.hidden = true;
});

// ======================================
// 4. QUIZ QUESTIONS
// ======================================

const questions = [
  {
    question: "What does IP stand for?",
    options: [
      "Internet Protocol",
      "Internal Program",
      "Input Process",
      "Internet Provider"
    ],
    answer: 0
  },
  {
    question: "Which port is commonly used by HTTPS?",
    options: ["21", "22", "80", "443"],
    answer: 3
  },
  {
    question: "Which command displays the current directory in Linux?",
    options: ["ls", "pwd", "mkdir", "touch"],
    answer: 1
  },
  {
    question: "What does DNS do?",
    options: [
      "Deletes files",
      "Creates passwords",
      "Converts domain names into IP addresses",
      "Scans computer memory"
    ],
    answer: 2
  },
  {
    question: "Which protocol helps secure web communication?",
    options: ["FTP", "HTTPS", "Telnet", "HTTP only"],
    answer: 1
  },
  {
    question: "What is phishing?",
    options: [
      "A programming language",
      "A network cable",
      "A type of operating system",
      "A deceptive attempt to steal information"
    ],
    answer: 3
  },
  {
    question: "Which command lists files in Linux?",
    options: ["ls", "pwd", "cd", "clear"],
    answer: 0
  },
  {
    question: "What is the purpose of a firewall?",
    options: [
      "Increase screen brightness",
      "Create documents",
      "Filter network traffic",
      "Change a username"
    ],
    answer: 2
  },
  {
    question: "What must you have before testing someone else's system?",
    options: [
      "Their password",
      "Proper authorization",
      "Their personal files",
      "A public IP address"
    ],
    answer: 1
  },
  {
    question: "What is the main goal of ethical hacking?",
    options: [
      "Steal personal information",
      "Damage computer systems",
      "Bypass all security rules",
      "Identify and help fix security weaknesses"
    ],
    answer: 3
  }
];

// ======================================
// 5. QUIZ STATE
// ======================================

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const questionCountElement =
  document.getElementById("question-count");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-question");
const restartButton = document.getElementById("restart-quiz");

// ======================================
// 6. DISPLAY A QUESTION
// ======================================

function showQuestion() {
  answered = false;

  const item = questions[currentQuestion];

  questionCountElement.textContent =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  scoreElement.textContent = `Score: ${score}`;

  questionElement.textContent = item.question;
  feedbackElement.textContent = "";
  optionsElement.replaceChildren();

  item.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    optionsElement.appendChild(button);
  });

  nextButton.hidden = false;
  restartButton.hidden = true;

  nextButton.disabled = true;
  nextButton.textContent =
    currentQuestion === questions.length - 1
      ? "See Results"
      : "Next Question";
}

// ======================================
// 7. CHECK THE ANSWER
// ======================================

function checkAnswer(selectedIndex) {
  if (answered) return;

  answered = true;

  const item = questions[currentQuestion];
  const buttons = optionsElement.querySelectorAll("button");

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === item.answer) {
      button.classList.add("correct");
    }

    if (index === selectedIndex && index !== item.answer) {
      button.classList.add("wrong");
    }
  });

  if (selectedIndex === item.answer) {
    score++;
    feedbackElement.textContent = "Correct answer! Well done.";
    feedbackElement.style.color = "#4ade80";
  } else {
    feedbackElement.textContent =
      "Incorrect. Correct answer: " +
      item.options[item.answer];

    feedbackElement.style.color = "#f87171";
  }

  scoreElement.textContent = `Score: ${score}`;
  nextButton.disabled = false;
}

// ======================================
// 8. NEXT QUESTION AND RESULTS
// ======================================

function nextQuestion() {
  if (!answered) return;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
    return;
  }

  showResults();
}

function showResults() {
  questionCountElement.textContent = "Quiz Completed";
  questionElement.textContent =
    `Your score: ${score} out of ${questions.length}`;

  optionsElement.replaceChildren();

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  feedbackElement.textContent =
    percentage >= 80
      ? "Excellent work! You have a strong understanding."
      : percentage >= 50
        ? "Good effort! Revise the notes and try again."
        : "Keep learning! Review the modules and retry.";

  feedbackElement.style.color = "#4ade80";

  nextButton.hidden = true;
  restartButton.hidden = false;
}

// ======================================
// 9. RESTART THE QUIZ
// ======================================

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  showQuestion();

  document.getElementById("quiz").scrollIntoView({
    behavior: "smooth"
  });
}

// ======================================
// 10. EVENT LISTENERS AND STARTUP
// ======================================

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

loadCourses();
showQuestion();
