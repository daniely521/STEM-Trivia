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
const rightWrong = document.getElementById("right-wrong")

const questions = {
    science: [
        {question: "blah blah", options: ["blah blah", "blah", "blah blah blah"], correctAns: "blah"},
        {question: "blah blah", options: "blah blah", correctAns: "blah"}
    ]
}

let score = 0;
let currentMode = "";
let currentQuestionIndex = 0;
let selectedAns = "";

selectScience.addEventListener("click", ()=> {
    currentMode = "science";
    startGame()
});

submitButton.addEventListener("click", checkAnswer());

nextButton.addEventListener("click", nextQuestion());

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = questions[currentMode][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        optionContainer.appendChild(button);
        button.addEventListener("click", () => {
            selectedAns = button.textContent.toLowerCase();
        })
    });
}

function checkAnswer() {
    const currentQuestion = questions[currentMode][currentQuestionIndex];
    if (selectedAns === currentQuestion.correctAns) {
        score++;
        rightWrong.textContent = "Correct!";
        rightWrong.style.color = "green";
    } else {
        rightWrong.textContent = "Incorrect!";
        rightWrong.style.color = "red";
    }
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

