var questions = [{
    question: "What is the baby of the Moth known as?",
    choices: ["baby", "infant", "kit", "larva"],
    correctAnswer: 3
}, {
    question: "What is the adult of a kid called?",
    choices: ["calf", "doe", "goat", "chick"],
    correctAnswer: 2
}, {
    question: "What is the young of Buffalo called?",
    choices: ["calf", "baby", "pup", "cow"],
    correctAnswer: 0
}, {
    question: "What is a baby Alligator called?",
    choices: ["baby", "gator", "hatchling", "calf"],
    correctAnswer: 2
}, {
    question: "What is a baby Goose called?",
    choices: ["gooser", "gosling", "gup", "pup"],
    correctAnswer: 1
}, {
    question: "What is the baby Hamster called?",
    choices: ["pup", "chick", "infant", "billy"],
    correctAnswer: 0
}, {
    question: "What is the baby Hawk called?",
    choices: ["hawklet", "pup", "larva", "eyas"],
    correctAnswer: 3
}, {
    question: "What is the baby grasshopper called?",
    choices: ["hooper", "nymph", "stick", "pup"],
    correctAnswer: 1
}, {
    question: "What is the baby Kangaroo called?",
    choices: ["kinga", "joey", "calf", "baby"],
    correctAnswer: 1
}, {
    question: "What is the baby Whale called?",
    choices: ["whala", "cub", "grub", "infant"],
    correctAnswer: 1
}, {
    question: "What is the baby Monkey called?",
    choices: ["infant", "baby", "calf", "pup"],
    correctAnswer: 0
}, {
    question: "What is the baby Bear called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            var value = $("input[type='radio']:checked").val();
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContent > .question");
    var choiceList = $(document).find(".quizContent > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (var i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContent > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContent > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

   