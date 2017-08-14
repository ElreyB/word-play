$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var sentence = $("input").val().split(" ");

    var newSentence = sentence.filter(function(word) {
      return word.length >= 3;
    });

    var displaySentence = newSentence.reverse().join(" ");
    $(".result").append("<p>" + displaySentence + "</p>");
  });
});
