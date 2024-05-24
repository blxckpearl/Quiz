// JavaScript code for quiz functionality

// Define quiz questions and options
const quizData = [
    {
        question: "What is the capital of South Africa?",
        options: ["CPT", "BFN", "PTA", "All the above"],
        answer: 3
    },
    {
        question: "How many continents are there in Africa?",
        options: ["27", "1", "0", "I don't know, I failed grade 4"],
        answer: 2
    },
    {
        question: "How many colors are there in a rainbow?",
        options: ["6", "7", "48999", "I am gay, but I don't know"],
        answer: 1
    },
    {
        question: "does your mother know that you are gay?",
        options: ["Yes", "No", "Maybe", "I don't know, I am still in the closet"],
        answer: 3
    },
    {
        question: "If 1=3, 2=3, 3=5, 4=4, 5=4 then 6=?",
        options: ["3", "7", "1", "I am a slow learner"],
        answer: 0
    },
    {
        question: "which number is equivalent to 3^(4) divided by 3^(2)?",
        options: ["3", "9", "18", "yoh! ae fok"],
        answer: 1
    },
    {
        question: "How do you feel about P diddy?",
        options: ["I like him, therefore I am a disgusting human being", "i like his music, because i listen to trash", "I am gay too", "o mpotsa nonsense"],
        answer: 2
    },
    // Add more questions here...
];

// Get DOM elements
const startButton = document.getElementById("start");
const nextButton = document.getElementById("next");
const questionElement = document.getElementById("question-text");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-num");
const questionNumElement = document.getElementById("question-num");
const totalQuestionsElement = document.getElementById("total-questions");
const resultsSection = document.getElementById("results");
const quizSection = document.getElementById("quiz");

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    startButton.addEventListener("click", () => {
        startButton.style.display = "none";
        quizSection.style.display = "block";
        showQuestion();
    });
}

// Function to show a question
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.innerText = option;
        button.addEventListener("click", () => {
            checkAnswer(index);
        });
        optionsElement.appendChild(button);
    });

    questionNumElement.innerText = currentQuestionIndex + 1;
    totalQuestionsElement.innerText = quizData.length;
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResults();
    }
    
}

// Function to show the quiz results
function showResults() {
    quizSection.style.display = "none";
    resultsSection.style.display = "block";
    scoreElement.innerText = score;
}

// Function to restart the quiz
function restartQuiz() {
    const restartButton = document.getElementById("restart");
    restartButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultsSection.style.display = "none";
        quizSection.style.display = "block";
        showQuestion();
    });
}

// Call the necessary functions to start the quiz
startQuiz();
restartQuiz();


