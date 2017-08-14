$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var sentence = $("input").val().split(" ");

    var newSentence = [];

    sentence.forEach(function(word){
      if (word.length >= 3) {
        newSentence.push(word);
      }
    });

    var displaySentence = newSentence.reverse().join(" ");
    $(".result").append("<p>" + displaySentence + "</p>");
  });
});
