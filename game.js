const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = true;
let  score = 0;
let questionCounter = 0;
let availbelQuestions = [];

let questions = [
    {
        question:"What is the range of values that can be stored by int datatype in C?",
        choice1:"-(2^31) to (2^31) - 1.",
        choice2:"-256 to 255.",
        choice3:"-(2^61) to (2^61) - 1.",
        choice4:"0 to (2^31) - 1.",
        answer:1
    },
    {
        "question":"Using which tag we insert an JavaScript in HTML page?",
        "choice1":"<JavaScript type=\"text/javascript\">",
        "choice2":"<script type=\"text/javascript\">",
        "choice3":"<JScript type=\"text/javascript\">",
        "choice4":"<HTMLScript type=\"text/javascript\">",
        "answer":2
    },
    {
        "question":"Which of the following is true about links by default?",
        "choice1":"An unvisited link is underlined and blue",
        "choice2":" A visited link is underlined and red",
        "choice3":"An active link is underlined and purple",
        "choice4":"All the above",
        "answer":"choice1"
    },
    {
        "question":"The href attribute in the link tag specifies the:",
        "choice1":"HTML",
        "choice2":"CSS",
        "choice3":"javascript",
        "choice4":"java",
        "answer":"3"
    },
    {
        "question":"  HTML Event Attributes onunload fires",
        "choice1":"Destination of a link",
        "choice2":"Link",
        "choice3":"Hypertext",
        "choice4":"None of the above",
        "answer":"1"
    },
    {
        "question":"Twitter limits the number of characters per tweet is ?",
        "choice1":"130",
        "choice2":"160",
        "choice3":"124",
        "choice4":"140",
        "answer":"4"
    },
    {
        "question":"What is cell padding?",
        "choice1":" Used to separate cell walls from their contents",
        "choice2":"Used to set space between cells",
        "choice3":" Both a and b above",
        "choice4":"Used to provide width to a cell",
        "answer":"1"
    },
    {
        "question":" By default, what's the Fps shown on the timeline?",
        "choice1":"15",
        "choice2":"1",
        "choice3":"20",
        "choice4":"hnh?",
        "answer":"choice1"
    },
    {
        "question":"Dreamweaver's ____ feature allows users to select colors and make perfect color matches.",
        "choice1":"Color Cube",
        "choice2":"Palattes",
        "choice3":"HTML view",
        "choice4":"Eye dropper",
        "answer":"choice4"
    },
    {
        "question":"How to create a Date object in JavaScript?",
        "choice1":"dateObjectName = new Date([parameters])",
        "choice2":" dateObjectName.new Date([parameters])",
        "choice3":"dateObjectName := new Date([parameters])",
        "choice4":"dateObjectName Date([parameters])",
        "answer":"choice1"
    },
    {
        "question":"  The _______ method of an Array object adds and/or removes elements from an array.",
        "choice1":" Reverse",
        "choice2":"Shift",
        "choice3":"Slice",
        "choice4":"Splice",
        "answer":"choice4"
    },
    {
        "question":"To set up the window to capture all Click events, we use which of the following statement?",
        "choice1":"window.captureEvents(Event.CLICK);",
        "choice2":"window.handleEvents (Event.CLICK);",
        "choice3":"window.routeEvents(Event.CLICK );",
        "choice4":"window.raiseEvents(Event.CLICK );",
        "answer":"choice1"
    },
    {
        "question":"Who is making the Web standards?",
        "choice1":"Mozilla",
        "choice2":"Microsoft",
        "choice3":"The World Wide Web Consortium",
        "choice4":"NVDIA",
        "answer":"choice3"
    },
    {
        "question":"Which file controls how your frames will appear?",
        "choice1":" Frameset",
        "choice2":"Master Document",
        "choice3":"Template",
        "choice4":"Timeline",
        "answer":"choice1"
    },
    {
        "question":" What can't layers do if you want to convert them to tables?",
        "choice1":"Be close",
        "choice2":" Contain a Color",
        "choice3":"Be larger than the target table",
        "choice4":" Overlap",
        "answer":"choice3"
    }
];

const CORRECT_BOUNS = 10;
const MAX_QUESTIONS = 20;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availbelQuestions = [...questions];
    //console.log(availbelQuestions);

    getNewQuestion();
}


getNewQuestion = () => {
    if (availbelQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random()* availbelQuestions.length);
    currentQuestion = availbelQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availbelQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    });
});





// getNewQuestion = () => {
//     questionCounter++;
//     const questionIndex = Math.floor(Math.random()* availbelQuestions.length);
//     currentQuestion = availbelQuestions[questionIndex];
//     question.innerText = currentQuestion.question;

// }

// choices.forEach ((choice) => {
//     const number = choice.dataset["number"];
//     choice.innerText = currentQuestion["choice" + number];
// })

// choices.forEach((choice) => {
//     const number = choice.dataset['number'];
//     choice.innerText = currentQuestion['choice' + number];
// });

startGame();