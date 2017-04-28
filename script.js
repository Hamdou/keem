var catQuestionArray = ['Do you enjoy fat or thin cats?','What color cat do you prefer?','Will you name your own cat Keem?','White cats rule over your Ant world like beautiful Gods'];
var questionsanswered = 0;
var output= document.getElementById('output')
var answer= document.getElementById('answer')
var button1= document.getElementById('button1')
var question= document.getElementById('question')

//console.log (questionprompt)
var catpicker={
  display:function(input){
  var paragraph= document.createElement("P")
    var text= document.createTextNode(input)
     paragraph.appendChild(text)
     document.body.appendChild(paragraph)
  },

promptquestion:function () {
var test = Math.floor (Math.random()*(catQuestionArray.length));
var randomquestion = catQuestionArray[test]
question.innerHTML=randomquestion;
}
}
catpicker.promptquestion()
button1.addEventListener("click", catscript);

function catscript(event){
  if(questionsanswered<3)
{

  catpicker.display(answer.value);
  answer.value=""
  questionsanswered++
  catpicker.promptquestion()
}
else {
document.body.style.backgroundImage="url('dog.png')"
}}
