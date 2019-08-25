$(document).ready(function () {
    $("#quiz").hide();

    var startButton = $('<input type="button" class="startButton" value="Begin Quiz!">');
    startButton.appendTo($("body"));

    $(".startButton").click(function () {
        $("#quiz").show();

        $(".startButton").hide();

        setTimeout(function () {
            check();
        }, 45000);

        var number = 45
        var timer = setInterval(function () {
            decrement()
        }, 1000);

        function stop() {
            clearInterval(timer);
        }


        //  The decrement function.
        function decrement() {
            number--;

            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + number + "</h2>");

            //  Once number hits zero...
            if (number === 0) {

                //  ...run the stop function.
                stop();
                $("#quiz").hide();
            }
        }
    });
});

function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;

    var correct = 0;
    var incorrect = 0;

    if (question1 == "Liverpool") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (question2 == "Brazil") {
        correct++;
    }
    else {
        incorrect++;
    }

    if (question3 == "Lionel Messi") {
        correct++;
    }
    else{
        incorrect++;
    }

    if (question4 == "5 seconds") {
        correct++;
    }
    else{
        incorrect++;
    }

    if (question5 == "Belgium") {
        correct++;
    }
    else{
        incorrect++;
    }
    
    if (question6 == "10") {
        correct++;
    }
    else {
        incorrect++;
    }
    if (question7 == "Leicester City") {
        correct++;
    }
    else {
        incorrect++;
    }

    var pictures = ["assets/images/0.gif", "assets/images/1.gif", "assets/images/2.gif", "assets/images/3.gif", "assets/images/4.gif", "assets/images/5.gif"];

    var range;
    if (correct < 1) {
        range = 5;
    }

    if (correct > 0 && correct < 2) {
        range = 4;
    }

    if (correct > 1 && correct < 3) {
        range = 3;
    }

    if (correct > 2 && correct < 4) {
        range = 2;
    }

    if (correct > 3 && correct < 5) {
        range = 1;
    }

    if (correct > 4) {
        range = 0;
    }

    
    $("#quiz").hide();

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "Correct: " + correct;
    document.getElementById("number_incorrect").innerHTML = "Incorrect: " + incorrect;
    document.getElementById("picture").src = pictures[range];
}

