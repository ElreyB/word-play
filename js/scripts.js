var getWordCounts = function(sentence) {
  var words = sentence.reduce(function(count, word) {
    if (count[word] > 0) {
      count[word] += 1;
    } else {
      count[word] = 1;
    }
    return count;
  }, {});
  return words;
}

$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var sentence = $("input").val().split(" ");

    var newSentence = sentence.filter(function(word) {
      return word.length >= 3;
    });

    var displaySentence = newSentence.reverse().join(" ");
    $(".result").append("<p>" + displaySentence + "</p>");

    var wordCounts = getWordCounts(displaySentence.split(" "));
    for (var word in wordCounts) {
      $(".result").append("<p>" + word + ": " + wordCounts[word] + "</p>");
    }
  });
});
