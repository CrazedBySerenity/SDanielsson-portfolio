const questionText = document.getElementById("questions-text");
const answerText = document.getElementById("answer-text");
const countdownContainer = document.getElementById("countdown-container");
const countdownText = document.getElementById("countdown-text");
const timerLength = 3;

let questionActive = false;
let curTimer = timerLength;
let curQuestion = "";

let questions = [
    "Who would you 'forget' somewhere if they were your travel buddy for a round-the-world trip?",
    "Who would you want to swap lives with for a day?",
    "Who would you pick to be handcuffed to for 24 hours",
    "Who would you pick to work as a personal assistant for?",
    "Who would you trust to write and perform a song about your life?",
    "Who would you want to be your partner in a karaoke duet?",
    "Who would you choose to be your co-star in an embarrassing comedy skit?",
    "Who would you want as your personal chef for a month?",
    "Who would you want to have as your wingman or wingwoman at a singles bar?",
    "Who would you trust to design and decorate your dream home?",
    "Who would you choose to accompany you on a thrilling amusement park adventure?",
    "Who would you trust to design and create a fashion line inspired by outer space for you?",
    "Who would trust as your personal fortune teller?",
    "Who would you trust to design and construct a gravity-defying treehouse for you?",
    "Who would you choose to be your co-star in a movie about time-traveling hamsters?",
];

let answers = {
    "Who would you trust to write and perform a song about your life?": "Phil collins",
    "Who would you want to be your partner in a karaoke duet?": "Taylor Swift",
    "Who would you pick to be handcuffed to for 24 hours": "Tom Cruise",
    "Who would you trust to design and construct a gravity-defying treehouse for you?": "Gary Chang",
    "Who would you want to have as your wingman or wingwoman at a singles bar?": "Tina Fey",
    "Who would you choose to be your co-star in a movie about time-traveling hamsters?": "Samuel L Jackson",
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
        questionText.textContent = hideQuestion ? "The question is kept secret" : "The previous question was: " + curQuestion;
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