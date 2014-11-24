$(document).ready(function() {

  console.log("yes!");


  $(".text_input").keyup(function(event) {
    var new_text = event.target.value;
    var fixed = Model.findStrongs(new_text);
    // var fixed = Model.fixItalicsStars(fixed);
    // var fixed = Model.fixItalicsUnders(fixed);
    View.renderLiveText(fixed);
  });


})


Model = {
  findStrongs: function(text) {
    var textString = text.toString();
    var textArray = textString.match(/\*\*[a-zA-Z]+?\*\*/gi);
    var fixedMatches = [];

    for(i = 0; i < textArray.length; i++) {
      fixedMatches[i] = textArray[i].replace(/\*\*/, "<strong>");
      fixedMatches[i] = fixedMatches[i].replace(/\*\*/, "</strong>");

    }
    console.log(fixedMatches);

    var freshText;
      // textString.replace(textArray[i], fixedMatches[i]);
    for(i = 0; i < fixedMatches.length; i++) {
      freshText = textString.replace(textArray[i], fixedMatches[i]);
    }
    console.log(freshText);
    // console.log(textWithClosedStrong)
    return freshText;
  },


  fixStrongs: function(text) {

  }

  // fixItalicsStars: function(text){
  //   var textString = text.toString();
  //   // var textArray = textString.match(/\*\*[a-zA-Z]+?\*\*/gi)
  //   // var newString = textArray[0]

  //   var textWithOpenStrong = textString.replace("*", "<em>")
  //   var textWithClosedStrong = textWithOpenStrong.replace("*", "</em>")

  //   console.log(textWithClosedStrong)
  //   return textWithClosedStrong;
  // },
  // fixItalicsUnders: function(text){
  //   var textString = text.toString();
  //   // var textArray = textString.match(/\*\*[a-zA-Z]+?\*\*/gi)
  //   // var newString = textArray[0]

  //   var textWithOpenStrong = textString.replace("_", "<em>")
  //   var textWithClosedStrong = textWithOpenStrong.replace("_", "</em>")

  //   console.log(textWithClosedStrong)
  //   return textWithClosedStrong;
  // }

}
