var catQuestionArray = ['Do you enjoy fat or thin cats?','What color cat do you prefer?','Will you name your own cat Keem?','White cats rule over your Ant world like beautiful Gods'];
var questionsanswered = 0;
var output= document.getElementById('output')
console.log(navigator)

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
var questionprompt = prompt(randomquestion)
if (questionprompt) {
  catpicker.display (questionprompt)
  Colors.first=questionprompt
} else {

}{
}
}}
var Colors={first:"White",second:"Black"}
for (var i =0;i < catQuestionArray.length+1; i++){

  if(i >= catQuestionArray.length){
    console.log ('You should choose a Fatty White Cat')
  output.innerHTML=`You should choose a Fatty ${Colors.first} Cat`
  }
  else {
  catpicker.promptquestion()
  }
}
