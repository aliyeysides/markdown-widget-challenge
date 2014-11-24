$(document).ready(function() {
  $("#source-input").keyup(function(){
    var sourceInput = $(this).val();
    // console.log(sourceInput);
    array = sourceInput.split("\n");
    string = []
    for(var j = 0; j < array.length; j++){
      console.log(array[j])
      string.push(new StringFormatter(array[j]).italic());
    }
    $('#preview').html(string.join("<br>"));
  });
});
