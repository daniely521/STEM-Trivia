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
const homeButton = document.getElementById("home-button1");
const homeButton1 = document.getElementById("home-button2");
const resultsScreen = document.getElementById("results-screen");
const feedback = document.getElementById("feedback");
const rightWrong = document.getElementById("right-wrong")

const questions = {
    science: [
      { question: "What planet is known as the 'Red Planet'?", choices: ["Venus", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
      { question: "What is the powerhouse of the cell?", choices: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"], answer: "Mitochondria" },
      { question: "Which gas do plants absorb during photosynthesis?", choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
      { question: "What is the most abundant element in the universe?", choices: ["Oxygen", "Hydrogen", "Helium", "Carbon"], answer: "Hydrogen" },
      { question: "What is the unit of force in SI?", choices: ["Pascal", "Newton", "Joule", "Watt"], answer: "Newton" },
    ],
    technology: [
      { question: "Who is considered the father of computers?", choices: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage" },
      { question: "What does HTTP stand for?", choices: ["Hyper Text Transfer Protocol", "High Text Transfer Protocol", "Hyper Text Transport Protocol", "High Tech Transfer Protocol"], answer: "Hyper Text Transfer Protocol" },
      { question: "What year was the World Wide Web introduced?", choices: ["1989", "1991", "1993", "1995"], answer: "1991" },
      { question: "What does AI stand for?", choices: ["Artificial Intelligence", "Automated Interface", "Autonomous Input", "Advanced Internet"], answer: "Artificial Intelligence" },
      { question: "Which company developed Android?", choices: ["Microsoft", "Google", "Apple", "IBM"], answer: "Google" },
    ],
    engineering: [
      { question: "Who invented the telephone?", choices: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "James Watt"], answer: "Alexander Graham Bell" },
      { question: "What is the process of designing and building structures called?", choices: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Structural Science"], answer: "Civil Engineering" },
      { question: "What is the purpose of a bridge's truss?", choices: ["Aesthetic Design", "Load Distribution", "Energy Absorption", "Vibration Reduction"], answer: "Load Distribution" },
      { question: "Which material is known for its high tensile strength?", choices: ["Concrete", "Steel", "Aluminum", "Copper"], answer: "Steel" },
      { question: "What does CAD stand for?", choices: ["Computer Automated Design", "Civil Architecture Development", "Computer-Aided Design", "Construction Assistance Device"], answer: "Computer-Aided Design" },
    ],
    maths: [
      { question: "What is the value of Pi approximately?", choices: ["2.14", "3.14", "4.14", "5.14"], answer: "3.14" },
      { question: "What is the Pythagorean theorem used for?", choices: ["Solving triangles", "Finding the circumference", "Calculating angles", "Finding area"], answer: "Solving triangles" },
      { question: "What is 7 x 8?", choices: ["54", "56", "58", "60"], answer: "56" },
      { question: "What is the square root of 64?", choices: ["6", "7", "8", "9"], answer: "8" },
      { question: "What is the formula for the area of a circle?", choices: ["2πr", "πr²", "πr³", "4πr²"], answer: "πr²" },
    ],
  };

let score = 0;
let currentMode = "";
let currentQuestionIndex = 0;
let selectedAns = "";

selectScience.addEventListener("click", ()=> {
    currentMode = "science";
    startGame()
});

sleectTech.addEventListener("click", ()=> {
    currentMode = "technology";
    startGame()
});

selectEngineer.addEventListener("click", ()=> {
    currentMode = "engineering";
    startGame()
});

selectMath.addEventListener("click", ()=> {
    currentMode = "maths";
    startGame()
});

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", nextQuestion);

homeButton.addEventListener("click", () =>{
    gameScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
});

homeButton1.addEventListener("click", () =>{
    resultsScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
})

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

    currentQuestion.choices.forEach((option) => {
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
    if (selectedAns.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        score++;
        rightWrong.textContent = "Correct!";
        rightWrong.style.color = "green";
    } else {
        rightWrong.textContent = "Incorrect!";
        rightWrong.style.color = "red";
        setTimeout(() => {
            rightWrong.textContent = `the correct answer is ${currentQuestion.answer}`
            rightWrong.style.color = "blue";
        }, 500);
    }
    submitButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    rightWrong.textContent="";
    submitButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
    if (currentQuestionIndex < questions[currentMode].length - 1) {
        currentQuestionIndex++;
        selectedAns = "";
        loadQuestion();
    } else {
        endScreen();
    }
}

function endScreen() {
    gameScreen.classList.add("hidden");
    resultsScreen.classList.remove("hidden");
    feedback.textContent = `You scored ${score} out of ${questions[currentMode].length}`;
}