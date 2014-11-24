$(document).ready(function() {

  console.log("yes!");


  $(".text_input").keyup(function(event) {
    var new_text = event.target.value;
    var fixed = Model.fixStrongs(new_text);
    View.renderLiveText(fixed);
    fixed = Model.fixItalicsStars(fixed);
    View.renderLiveText(fixed);
    fixed = Model.fixItalicsUnders(fixed);
    View.renderLiveText(fixed);
  });



})


Model = {
  fixStrongs: function(text) {
    var textString = text.toString();
    var textArray = textString.match(/\*\*[\S\s]+?\*\*/gi);
    var fixedMatches = [];
    if(textArray != null) {
      for(i = 0; i < textArray.length; i++) {
        fixedMatches[i] = textArray[i].replace(/\*\*/, "<strong>");
        fixedMatches[i] = fixedMatches[i].replace(/\*\*/, "</strong>");

      }
      console.log("Fixed matches:")
      console.log(fixedMatches);

      for(i = 0; i < fixedMatches.length; i++) {
        textString = textString.replace(textArray[i], fixedMatches[i]);
      }
    }

    return textString;
  },


  fixItalicsStars: function(text) {
    var textString = text.toString();
    var textArray = textString.match(/\*[\S\s]+?\*/gi);
    var fixedMatches = [];
    if(textArray != null) {
      for(i = 0; i < textArray.length; i++) {
        fixedMatches[i] = textArray[i].replace(/\*/, "<em>");
        fixedMatches[i] = fixedMatches[i].replace(/\*/, "</em>");

      }
      console.log("Fixed matches:")
      console.log(fixedMatches);

      for(i = 0; i < fixedMatches.length; i++) {
        textString = textString.replace(textArray[i], fixedMatches[i]);
      }
    }
    return textString;
  },
  fixItalicsUnders: function(text){
    var textString = text.toString();
    var textArray = textString.match(/_[\S\s]+?_/gi);
    var fixedMatches = [];
    if(textArray != null) {
      for(i = 0; i < textArray.length; i++) {
        fixedMatches[i] = textArray[i].replace(/_/, "<em>");
        fixedMatches[i] = fixedMatches[i].replace(/_/, "</em>");

      }
      console.log("Fixed matches:")
      console.log(fixedMatches);

      for(i = 0; i < fixedMatches.length; i++) {
        textString = textString.replace(textArray[i], fixedMatches[i]);
      }
    }
    return textString;
  }

}
