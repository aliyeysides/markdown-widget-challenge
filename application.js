$(document).ready(function() {
  $("#source-input").keyup(function(){
    var sourceInput = $(this).val();
    array = sourceInput.split("\n");
    string = []
    for(var j = 0; j < array.length; j++){
      string.push(new StringFormatter(array[j]).logic());
    }
    $('#preview').html(string.join("\n"));
  });
});
