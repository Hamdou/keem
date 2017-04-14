var catQuestionArray = ['Do you enjoy fat or thin cats?','What color cat do you prefer?','Will you name your own cat Keem?','White cats rule over your Ant world like beautiful Gods'];
var questionsanswered = 0
for (var i =0;i < catQuestionArray.length+1; i++){

if(questionsanswered >= catQuestionArray.length){
  console.log ('You should choose a Fatty White Cat')
}
else {
questionsanswered++
promptquestion()
}}
//console.log (questionprompt)
function promptquestion() {
var test = Math.floor (Math.random()*(catQuestionArray.length));
var randomquestion = catQuestionArray[test]
var questionprompt = prompt(randomquestion)
}
