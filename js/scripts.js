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
    var sortableWordCounts = []
    for (var word in wordCounts) {
      sortableWordCounts.push([word, wordCounts[word]]);
    }

    sortableWordCounts.sort(function(a, b) {
      return b[1] - a[1];
    });

    sortableWordCounts.forEach(function(wordCount) {
      $(".result").append("<p>" + wordCount[0] + ": " + wordCount[1] + "</p>");
    });
  });
});
