const questionText = document.getElementById("questions-text");
const answerText = document.getElementById("answer-text");
const countdownContainer = document.getElementById("countdown-container");
const countdownText = document.getElementById("countdown-text");
const timerLength = 3;

let questionActive = false;
let curTimer = timerLength;
let curQuestion = "";

let questions = [
    "Who would you trust to write and perform a song about your life?",
    "Who would you want to be your partner in a karaoke duet?",
    "Who would you pick to be handcuffed to for 24 hours",
    "Who would you trust to design your dream home?",
    "Who would you want to have as your wingman or wingwoman?",
    "Who would you choose to be your co-star in a movie about time-traveling hamsters?",
    "Who would you 'forget' somewhere if they were your travel buddy?",
    "Who would you want as your personal chef for a month?",
    "Who would you bring to an awesome amusement park?",
];

let answers = {
    "Who would you trust to write and perform a song about your life?": "Phil collins",
    "Who would you want to be your partner in a karaoke duet?": "Taylor Swift",
    "Who would you pick to be handcuffed to for 24 hours": "Tom Cruise",
    "Who would you trust to design your dream home?": "Gary Chang",
    "Who would you want to have as your wingman or wingwoman?": "Tina Fey",
    "Who would you choose to be your co-star in a movie about time-traveling hamsters?": "Samuel L Jackson",
    "Who would you 'forget' somewhere if they were your travel buddy?": "All of my siblings",
    "Who would you want as your personal chef for a month?": "My grandma",
    "Who would you bring to an awesome amusement park?": "My girlfriend"
}

function buttonClick () {
    if(curTimer < timerLength) return;
    if(questions.length <= 0) return;
    console.log("click");

    switch (questionActive){
        case false:
            questionActive = true;
            randomQuestion();
            break;
        case true:
            questionActive = false;
            countdown();
            break;
    }
}

function randomQuestion() {
    if(questions.length <= 0){
        questionText.textContent = "Out of questions";
        return;
    }

    let rQuestion = questions[Math.floor((Math.random()*questions.length))];
    questions.splice(questions.indexOf(rQuestion), 1);
    curQuestion = rQuestion;
    questionText.textContent = rQuestion;
    answerText.textContent = answerText.textContent = answers[curQuestion] ? answers[curQuestion] : "...";
    questionActive = false;
    countdown();
}

function countdown() {
    if(curTimer >= timerLength){
        countdownText.textContent = curTimer;
        countdownContainer.style.visibility = "visible";
        curTimer -= 1;
        setTimeout(countdown, 1000);
    }
    else if(curTimer <= 0){
        countdownText.textContent = curTimer;
        let hideQuestion = Math.random() > 0.50;
        questionText.textContent = hideQuestion ? "The question is kept secret" : "The question was: " + curQuestion;
        answerText.textContent = answers[curQuestion] ? answers[curQuestion] : "...";
        countdownContainer.style.visibility = "hidden";
        curTimer = timerLength;
    }
    else{
        countdownText.textContent = curTimer;
        curTimer -= 1;
        setTimeout(countdown, 1000);
    }

}