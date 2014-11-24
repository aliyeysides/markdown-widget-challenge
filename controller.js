$(document).ready(function() {
console.log("hello");
$("#inputText").keyup(function(event) {
  console.log(this.value);
  $("#outputText").html(this.value);
})
});
