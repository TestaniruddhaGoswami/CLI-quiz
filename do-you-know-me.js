var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question(" Play the quiz What is your name? ");

console.log("Welcome", userName, "to do you know me quiz ")

function play (question,answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right!"),
    score = score + 1
  }else{
    console.log("Wrong!")
  }

  console.log("Current Score: ",score)
  console.log("------------")
}


var questions = [ {
  question : "What is my nick name ?  ",
  answer : "ag"
},{
  question : " Where do i belong to ? ",
  answer : "bagwali pokhar"
},

{
  question : " What is my favorite ? ",
  answer : "football"
},
{
  question : "What is my favour ? ",
  answer : ""
},
{
  question : "What is my ?",
  answer : ""
}






 ]

for (var i = 0; i<questions.length; i = i+1){
  currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}

console.log("Yay! you Scored ", score, "points")