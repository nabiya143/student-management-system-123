const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const courses = [
  {
    id: 1,
    title: "Computer Networking",
    description: "Learn IP addresses, DNS, TCP/IP and ports.",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Linux Fundamentals",
    description: "Understand terminal commands and file permissions.",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Web Security",
    description: "Learn HTTPS, authentication and common web risks.",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Ethical Hacking Basics",
    description: "Learn legal testing principles and safe lab practices.",
    level: "Beginner"
  }
];

const quiz = [
  {
    id: 1,
    question: "What does HTTPS help provide?",
    options: [
      "Encrypted communication",
      "Faster typing",
      "More storage",
      "A larger screen"
    ],
    answer: 0,
    explanation: "HTTPS protects data in transit using encryption."
  },
  {
    id: 2,
    question: "Which is a Linux operating system?",
    options: [
      "Ubuntu",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    answer: 0,
    explanation: "Ubuntu is a Linux distribution."
  },
  {
    id: 3,
    question: "What is phishing?",
    options: [
      "A type of monitor",
      "A deceptive attempt to steal information",
      "A programming language",
      "A file format"
    ],
    answer: 1,
    explanation: "Phishing uses deceptive messages or sites to steal data."
  }
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.get("/api/quiz", (req, res) => {
  const publicQuestions = quiz.map(
    ({ id, question, options }) => ({
      id,
      question,
      options
    })
  );

  res.json(publicQuestions);
});

app.post("/api/check-answer", (req, res) => {
  const { questionId, answer } = req.body;

  if (
    !Number.isInteger(questionId) ||
    !Number.isInteger(answer)
  ) {
    return res.status(400).json({
      error: "A valid question ID and answer are required."
    });
  }

  const item = quiz.find(q => q.id === questionId);

  if (!item || answer < 0 || answer >= item.options.length) {
    return res.status(400).json({
      error: "Invalid question or answer."
    });
  }

  res.json({
    correct: answer === item.answer,
    explanation: item.explanation
  });
});

app.listen(PORT, () => {
  console.log(`CyberLearn running at http://localhost:${PORT}`);
});