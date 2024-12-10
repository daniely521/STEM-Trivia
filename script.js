const startScreen = document.getElementById("start-screen");
const selectScience = document.getElementById("science");
const sleectTech = document.getElementById("technology");
const selectEngineer = document.getElementById("engineering");
const selectMath = document.getElementById("mathematics");
const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const questionElement = document.getElementById("question");
const optionContainer = document.getElementById("option-cont");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");
const homeButton = document.getElementsByClassName("home-button");
const resultsScreen = document.getElementById("results-screen");
const feedback = document.getElementById("feedback");

const questions = {
    mode: [
        {question: "blah blah", options: "blah blah", correctAns: "blah"},
        {question: "blah blah", options: "blah blah", correctAns: "blah"}
    ]
}

let score = 0;
let currentMode = "";
let currentQuestionIndex = 0;

function startGame(mode) {
    score = 0;
    currentQuestionIndex = 0;
    currentMode = mode;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions.currentMode[currentQuestionIndex].question;
}