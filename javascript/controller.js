$(document).ready(function() {

  console.log("yes!");


  $(".text_input").keyup(function(event) {
    var new_text = event.target.value;
    var fixed = Model.fixMarkdown(new_text, "strong", /\*\*[\S\s]+?\*\*/gi, /\*\*/);
    View.renderLiveText(fixed);
    var fixed = Model.fixMarkdown(fixed, "em", /\*[\S\s]+?\*/gi, /\*/);
    View.renderLiveText(fixed);
    var fixed = Model.fixMarkdown(fixed, "em", /_[\S\s]+?_/gi, /_/);
    View.renderLiveText(fixed);
  });


})


Model = {
  fixMarkdown: function(text, tag, search_pattern, swapout) {
    var textString = text.toString();
    var textArray = textString.match(search_pattern);
    var fixedMatches = [];
    if(textArray != null) {
      for(i = 0; i < textArray.length; i++) {
        fixedMatches[i] = textArray[i].replace(swapout, "<" + tag + ">");
        fixedMatches[i] = fixedMatches[i].replace(swapout, "</" + tag + ">");

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
