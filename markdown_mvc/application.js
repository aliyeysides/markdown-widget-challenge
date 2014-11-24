function Model() {

};

function Viewer() {
  this.document = "his";
};

function Controller() {
  this.view = new Viewer;

}

Controller.Process = new function(){
  console.log("HEllo World")



}



// $(document).ready(function(){
//   $('#source').bind('keyup', function(event) {
//     $('#source').bind('keypress', function(e){
//       if(e.keyCode==32){
//          // user has pressed backspace
//         var source = $('#source').val();
//         var isItalic = false;
//         var isBold = false
//         var new_source = [];
//         split_source = source.split(" ")
//         console.log("1" + split_source)
//         for (word in split_source){
//           if (split_source[word] == '*' && isItalic==false){
//               isItalic = true;
//               new_source.push('<i>')
//           } else if (split_source[word]=='*' && isItalic==true){
//               isItalic = false;
//               new_source.push('</i>');

//           }
//           else if (split_source[word]=='**' && isBold==false){
//               isBold = true;
//               new_source.push('<strong>');

//           }
//           else if (split_source[word]=='**' && isBold==true){
//               isBold = false;
//               new_source.push('</strong>');

//           } else {
//               new_source.push(split_source[word])
//           }
//         }
//           $('#preview').html(new_source.join(" "))
//       }
//     });
//   })
// })
